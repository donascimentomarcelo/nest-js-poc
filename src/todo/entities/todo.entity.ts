// import {
//   CreateTableCommand,
//   CreateTableCommandInput,
// } from '@aws-sdk/client-dynamodb';
// import dynamoDbConfig from 'src/config/dynamoDBClient';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

// const todoTableParams: CreateTableCommandInput = {
//   TableName: 'todos',
//   KeySchema: [
//     { AttributeName: 'PK', KeyType: 'HASH' },
//     { AttributeName: 'SK', KeyType: 'RANGE' },
//   ],
//   AttributeDefinitions: [
//     { AttributeName: 'PK', AttributeType: 'S' },
//     { AttributeName: 'SK', AttributeType: 'S' },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 2,
//     WriteCapacityUnits: 2,
//   },
// };

// const command = new CreateTableCommand(todoTableParams);

// dynamoDbConfig.
