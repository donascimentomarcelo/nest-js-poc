import * as AWS from 'aws-sdk';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.ACCESS_ID,
  secretAccessKey: process.env.SECRET_KEY,
});

const client = new DynamoDBClient();
const configDB = DynamoDBDocumentClient.from(client);
export default configDB;
