import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtService],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
