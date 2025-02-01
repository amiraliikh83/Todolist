import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { RegisterModule } from './Register/register.module';
import { HandlerModule } from './handler/handler.module';

@Module({
  imports: [AuthModule, RegisterModule, HandlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
