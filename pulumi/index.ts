import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("pulumi-bucket-s3", {
  acl: "private",
});

new aws.s3.Bucket("pulumi-bucket-s3-1", {
  acl: "private",
});

// Export the name of the bucket
export const bucketName = bucket.id;
