import { Duration, Stack, StackProps, aws_s3 as s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkS3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

  new s3.Bucket(this, 'aws-cdk-s3-bucket', {
  bucketName: 'aws-cdk-s3-bucket-123',
  versioned: false,
  websiteRedirect: {hostName: 'aws.amazon.com'}});
  }
}
