resource "aws_instance" "my-test-instance-terraform" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"

  tags = {
    Name = "terraform-test-instance"
  }
}