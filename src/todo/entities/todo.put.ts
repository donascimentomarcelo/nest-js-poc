import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { Todo } from './todo.entity';
import configDB from 'src/config/configDB';

const putTodo = async (todo: Todo) => {
  const putTodoParams: PutCommandInput = {
    TableName: 'todos',
    Item: {
      // PK: 'TODOS',
      // SK: todo.id,
      id: 'TODOS',
      todo_id: todo.id,
      title: todo.title,
    },
  };

  const command = new PutCommand(putTodoParams);
  return await configDB.send(command);
};

export default putTodo;
