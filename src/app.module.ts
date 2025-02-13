import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { HandlerModule } from './Main/Handler/handler.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './Main/users/users.module';
import jwtModuleSource from './utils/JwtModule';

@Module({
  imports: [
    JwtModule.register(jwtModuleSource),
    HandlerModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
