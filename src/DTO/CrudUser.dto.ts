import { IsString } from 'class-validator';
export class CrudUser {
  @IsString()
  UserName: string;

  @IsString()
  Email: string;

  @IsString()
  Password: string;
}
