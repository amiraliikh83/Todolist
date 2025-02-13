import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
export class CrudTodo {
  @IsString()
  TodoSubject: string;

  @IsNumber()
  TodoFolder: number;

  @IsNumber()
  TodoPriority: number;

  @IsBoolean()
  IsListTodo: boolean;

  @IsString()
  TodoDescription: string;

  @IsArray()
  TodoItem: [];
}
