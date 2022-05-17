provider "aws" {
  region  = "ap-northeast-1"
  profile = "SygnaSandbox"
}

module "s3" {
    source = "./s3"
    #bucket name should be unique
    bucket_name = "terraform-s3-bucket-11223344"
}
