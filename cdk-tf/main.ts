
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput} from "cdktf";
import { AwsProvider, s3 } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

     new AwsProvider(this, "AWS", {
      region: "ap-northeast-1",
      profile: "SygnaSandbox"
    });

    const bucket = new s3.S3Bucket(this, "cdktf-s3-bucket-1", {
      bucket: "cdktf-s3-bucket-1",
    })

    new TerraformOutput(this, "bucket_name", {
      value: bucket.bucket
    })
  }
}

const app = new App();
new MyStack(app, "cdktf-s3-bucket-stack-1");

app.synth();
