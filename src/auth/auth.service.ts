import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetDatabaseRequest } from 'src/DataBase/connection';
import * as Bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async ValidateLogin(UserName: string, Password: string): Promise<any> {
    try {
      const LoginRequest = await GetDatabaseRequest();
      const result = await LoginRequest.input('UserName', UserName).execute(
        'LoginValidate',
      );
      const user = result.recordset[0];
      const ID = user.ID;
      const userName = user.UserName;
      const hashedPassword = user.Password;
      const passwordMatch = await Bcrypt.compare(Password, hashedPassword);
      if (!passwordMatch) {
        throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
      }
      const payload = { ID, userName };
      const token = this.jwtService.sign(payload, {
        expiresIn: process.env.TIME_AUTH,
      });

      if (passwordMatch) {
        return {
          success: true,
          message: 'Login successful',
          token,
          statusCode: HttpStatus.OK,
        };
      }
    } catch (err) {
      console.error('Error validating user:', err.message);
      throw new HttpException(
        'UserName or Password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  async login(UserName: string, Password: string): Promise<any> {
    return this.ValidateLogin(UserName, Password);
  }
}
