import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetDatabaseRequest } from 'src/DataBase/connection';
import * as Bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async ValidateLogin(UserName: string, Password: string) {
    try {
      const LoginRequest = await GetDatabaseRequest();
      const result = await LoginRequest.input('UserName', UserName).execute(
        'LoginValidate',
      );
      const user = result.recordset[0];
      const ID = user.ID;
      const userName = user.UserName;
      const hashedPassword = user.Password;
      const userGroupeID = user.UserGroupId;
      const passwordMatch = await Bcrypt.compare(Password, hashedPassword);
      if (!passwordMatch) {
        throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
      }
      const payload = { ID, userName, userGroupeID };
      const token = this.jwtService.sign(payload, {
        expiresIn: process.env.TIME_AUTH,
      });

      if (UserName === user.UserName && Password === user.Password) {
        return {
          success: true,
          message: 'Login successful',
          token,
          statusCode: HttpStatus.OK,
          userGroupeID,
        };
      }
    } catch (err) {
      console.error('Error validating user:', err.message);
      throw new HttpException(
        'CodeMeli or Password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  async login(UserName: string, Password: string): Promise<any> {
    return this.ValidateLogin(UserName, Password);
  }
}
