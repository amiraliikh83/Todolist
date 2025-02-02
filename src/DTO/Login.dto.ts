import { IsString } from 'class-validator';
export class LoginDto {
  @IsString()
  UserName: string;

  @IsString()
  Password: string;
}
