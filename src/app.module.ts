import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { HandlerModule } from './Main/Handler/handler.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, HandlerModule, JwtService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
