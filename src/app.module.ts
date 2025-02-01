import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { HandlerModule } from './Main/Handler/handler.module';

@Module({
  imports: [AuthModule, HandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
