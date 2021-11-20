# Application Security Group
resource "aws_security_group" "terraform_test_sg" {
  name = "terraform_test_sg"
  description = "Web Security Group"

  # allow ingress of port 22
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  } 

  # allow ingress of port 5000
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  } 
  
  # allow egress of all ports
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

    tags = {
        Name = "TerraformTest_Security_Group"
        Description = "Web Security Group"
    }
}

resource "aws_instance" "my-test-instance-terraform" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  security_groups = [aws_security_group.terraform_test_sg.name]
  key_name = "pdsuthar10-developer"

  tags = {
    Name = "terraform-test-instance"
  }
}