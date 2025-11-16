AWS.config.region = "ap-northeast-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "ap-northeast-2:YOUR_IDENTITY_POOL_ID"
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const lambda = new AWS.Lambda();

const BUCKET_NAME = "your-figma-based-bucket";
const LAMBDA_NAME = "EcoSortAnalyze";
