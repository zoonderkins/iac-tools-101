## Install cdk-tf

`npm install --global cdktf-cli@latest`

## Init project

`cdktf init --template=typescript --local`

## Install provider

```
  npm install @cdktf/provider-aws
  npm install @cdktf/provider-google
  npm install @cdktf/provider-azurerm
  npm install @cdktf/provider-docker
  npm install @cdktf/provider-github
  npm install @cdktf/provider-null
```

## Init provider

`cdktf get`

## List application

`cdktf list`

## Synth and Deploy

`cdktf synth --profile SygnaSandbox`

`cdktf deploy --profile SygnaSandbox`

## Destroy

`cdktf destory`
