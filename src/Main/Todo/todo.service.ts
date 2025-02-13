import { HttpStatus, Injectable } from '@nestjs/common';
import { GetDatabaseRequest } from 'src/DataBase/connection';
import { CrudTodo } from 'src/DTO/CrudTodo.Dto';

@Injectable()
export class TodoService {
  async CreateTodo(CrudTodo: CrudTodo) {
    try {
      const createRequest = await GetDatabaseRequest();
      createRequest
        .input('TodoID', 0)
        .input('UserID', 5)
        .input('TodoSub', CrudTodo.TodoSubject)
        .input('TodoFolder', CrudTodo.TodoFolder)
        .input('TodoPriority', CrudTodo.TodoPriority)
        .input('IsListTodo', CrudTodo.IsListTodo)
        .input('TodoDes', CrudTodo.TodoDescription)
        .input('TodoListItems', JSON.stringify(CrudTodo.TodoItem))
        .execute('TodoInfo_Save');
      return {
        StatusCode: HttpStatus.CREATED,
        Message: 'Todo Created Successfully',
      };
    } catch (err) {
      throw new Error(`Error In Api ${err.message}`);
    }
  }
}
