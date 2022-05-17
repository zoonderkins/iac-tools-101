variable "bucket_name" {
    description = "Bucket name"
    type        = "string"
    default     = "terraform-s3-bucket-11223344"
}

variable "acl_value" {
    default = "private"
}
