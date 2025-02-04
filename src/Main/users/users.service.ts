import { HttpStatus, Injectable } from '@nestjs/common';
import { GetDatabaseRequest } from 'src/DataBase/connection';
import bcrypt from 'bcrypt';
import { CrudUser } from 'src/DTO/CrudUser.dto';

@Injectable()
export class UsersService {
  async register(CrudUser: CrudUser): Promise<any> {
    try {
      const request = await GetDatabaseRequest();
      const hashedPassword = await bcrypt.hash(CrudUser.Password, 10);

      // Input parameters
      request.input('UserID', 0);
      request.input('UserName', CrudUser.UserName);
      request.input('Email', CrudUser.Email);
      request.input('Password', hashedPassword);

      // Execute the stored procedure
      const result = await request.execute('UsersInfo_Save');

      if (result.returnValue === 0) {
        return {
          message: 'Registration successful',
          statusCode: HttpStatus.CREATED,
        };
      }
    } catch (err) {
      throw new Error('Error registering user: ' + err.message);
    }
  }
}
