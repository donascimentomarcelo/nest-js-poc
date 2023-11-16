import {
  CreateTableCommand,
  CreateTableCommandInput,
} from '@aws-sdk/client-dynamodb';
import configDB from 'src/config/configDB';

const todoTableParams: CreateTableCommandInput = {
  TableName: 'todos',
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
};

const command = new CreateTableCommand(todoTableParams);

configDB
  .send(command)
  .then((resp) => {
    console.log(resp);
  })
  .catch((e) => console.log(e));
