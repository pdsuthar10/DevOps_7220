# Configure Microsoft Azure Provider
provider "azurerm" {
    features {}
}

# Create Resource Group
resource "azurerm_resource_group" "terraformtest" {
  name     = "terraformtest"
  location = "East US"
}