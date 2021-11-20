# Configure the Microsoft Azure Provider
provider "azurerm" {
  version = "~> 2.50"
  features {}
}

# create a resource group 
resource "azurerm_resource_group" "terraformtest" {
  name     = "terraform-test"
  location = "East US"
}

# create a virtual network
resource "azurerm_virtual_network" "terraformnetwork" {
    name = "terraform-test-vn"
    address_space = ["10.0.0.0/16"]
    location = "East US"
    resource_group_name = azurerm_resource_group.terraformtest.name
}

# create subnet
resource "azurerm_subnet" "terraformsubnet" {
    name = "terraform-test-subnet"
    resource_group_name = azurerm_resource_group.terraformtest.name
    virtual_network_name = azurerm_virtual_network.terraformnetwork.name
    address_prefix = "10.0.2.0/24"
}

# create public IP
resource "azurerm_public_ip" "terraformips" {
    name = "terraform-test-ip"
    location = "East US"
    resource_group_name = azurerm_resource_group.terraformtest.name
    allocation_method = "Dynamic"

    tags = {
        environment = "Terraform Demo"
    }
}

# create security group
resource "azurerm_network_security_group" "terraformnsg" {
 name = "terraform-test-nsg"
 location = "East US"
 resource_group_name = azurerm_resource_group.terraformtest.name
 security_rule {
    name = "SSH" 
    priority = 1001 
    direction = "Inbound" 
    access = "Allow" 
    protocol = "Tcp"
    source_port_range = "*" 
    destination_port_range = "22"
    source_address_prefix = "*" 
    destination_address_prefix = "*"
 }
 tags = {
   environment = "Terraform Demo"
 }
}

# create network interface
resource "azurerm_network_interface" "terraformnic" {
    name = "terraform-test-ni"
    location = "East US"
    resource_group_name = azurerm_resource_group.terraformtest.name
	# network_security_group_id = [azurerm_network_security_group.terraformnsg.name]

    ip_configuration {
        name = "terraform-test-configuration-1"
        subnet_id = azurerm_subnet.terraformsubnet.id
        private_ip_address_allocation = "static"
        private_ip_address = "10.0.2.5"
        public_ip_address_id = azurerm_public_ip.terraformips.id
    }
}

# create storage account
resource "azurerm_storage_account" "terraformstorage" {
    name = "pdsterraformteststorage"
    resource_group_name = azurerm_resource_group.terraformtest.name
    location = "East US"
	account_replication_type = "LRS"
	account_tier = "Standard"

    tags = {
        environment = "staging"
    }
}

# create storage container
resource "azurerm_storage_container" "terraformstoragecontainer" {
    name = "terraform-test-sc"
    storage_account_name = azurerm_storage_account.terraformstorage.name
    container_access_type = "private"
    depends_on = [azurerm_storage_account.terraformstorage]
}

# create virtual machine
resource "azurerm_virtual_machine" "terraformvm" {
    name = "terraform-test-vm"
    location = "East US"
    resource_group_name = azurerm_resource_group.terraformtest.name
    network_interface_ids = [azurerm_network_interface.terraformnic.id]
    vm_size = "Standard_A1_V2"

    storage_image_reference {
        publisher = "Canonical"
        offer = "UbuntuServer"
        sku = "18.04-LTS"
        version = "latest"
    }

    storage_os_disk {
        name = "myosdisk"
        vhd_uri = "${azurerm_storage_account.terraformstorage.primary_blob_endpoint}${azurerm_storage_container.terraformstoragecontainer.name}/myosdisk.vhd"
        caching = "ReadWrite"
        create_option = "FromImage"
    }

    os_profile {
        computer_name = "hostname"
        admin_username = "testadmin"
        admin_password = "Password1234!"
    }

    os_profile_linux_config {
        disable_password_authentication = false
    }

    tags = {
        environment = "staging"
    }
}


