import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import dynamoDbConfig from 'src/config/dynamoDBClient';
import { ScanCommandInput } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommandOutput,
  ScanCommand,
  ScanCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import configDB from 'src/config/configDB';
import putTodo from './entities/todo.put';
import { uuid } from 'uuidv4';
import deleteTodo from './entities/todo.delete';
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    // const todo = this.todoRepository.create(createTodoDto);
    // return await this.todoRepository.save(todo);
    const { title } = createTodoDto;
    const todo = new Todo(uuid(), title);
    await putTodo(todo);
    return todo;
  }

  async findAll(): Promise<ScanCommandOutput> {
    // const params = {
    //   TableName: 'todos',
    // };

    // try {
    //   return await dynamoDbConfig.scan(params).promise();
    // } catch (error) {
    //   console.log(error);
    // }

    const todoParams: ScanCommandInput = {
      TableName: 'todos',
    };

    const command = new ScanCommand(todoParams);
    return await configDB.send(command);
  }

  async findOne(id: number): Promise<Todo[]> {
    return await this.todoRepository.find({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });

    Object.assign(todo, updateTodoDto);
    await this.todoRepository.save(todo);
    return todo;
  }

  async remove(id: string): Promise<DeleteCommandOutput> {
    //: Promise<DeleteResult> {
    return await deleteTodo(id);
    // return await this.todoRepository.delete(id);
  }
}
