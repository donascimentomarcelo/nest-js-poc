import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import configDB from 'src/config/configDB';

const deleteTodo = async (id: string) => {
  const deleteTodoParams: DeleteCommandInput = {
    TableName: 'todos',
    Key: {
      id: 'TODOS',
      todo_id: id,
    },
  };

  const command = new DeleteCommand(deleteTodoParams);
  return await configDB.send(command);
};

export default deleteTodo;
