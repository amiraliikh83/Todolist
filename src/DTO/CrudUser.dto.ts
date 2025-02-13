import { IsString } from 'class-validator';
export class CrudUser {
  @IsString()
  UserName: string;
  @IsString()
  Password: string;
  @IsString()
  Email: string;
}
