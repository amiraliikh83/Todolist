import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { HandlerModule } from './Main/Handler/handler.module';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './Main/users/users.module';

@Module({
  imports: [AuthModule, HandlerModule, JwtService, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
