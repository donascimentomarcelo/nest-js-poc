import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.SECRET_KEY,
});

const dynamoDbConfig = new AWS.DynamoDB.DocumentClient();

export default dynamoDbConfig;
