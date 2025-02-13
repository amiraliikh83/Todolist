import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './Main/users/users.module';
import jwtModuleSource from './utils/JwtModule';
import { TodoModule } from './Main/Todo/todo.module';

@Module({
  imports: [
    JwtModule.register(jwtModuleSource),
    UsersModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
