import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CrudUser } from 'src/DTO/CrudUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Post('create')
  async CreateUsers(CrudUsers: CrudUser) {
    try {
      return this.UsersService.register(CrudUsers);
    } catch (err) {
      throw new Error(`Error in Api : ${err.message}`);
    }
  }
}
