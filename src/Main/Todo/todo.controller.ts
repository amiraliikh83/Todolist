import { Body, Controller, Post } from '@nestjs/common';
import { CrudTodo } from 'src/DTO/CrudTodo.Dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}
  @Post('create')
  async CreateTodoController(@Body() CrudTodo: CrudTodo) {
    try {
      return this.TodoService.CreateTodo(CrudTodo);
    } catch (err) {
      throw new Error(`Error In Api ${err.message}`);
    }
  }
}
