# AWS Lambda + Typescript + Cron + Discord Webhooks
Set up a cron job for posting on a Discord channel

# Installation

```
npm i serverless -g
```

```
serverless create --template aws-nodejs
```

```
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
```

```
npm init
```

```
npm i serverless-offline serverless-plugin-typescript --save-dev
```

```
npm install mocha @types/mocha chai @types/chai --save-dev
```

## Start Service

```
severless offline start
```

## References

https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/

https://www.jamestharpe.com/serverless-typescript-getting-started/