import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import jwtModuleSource from 'src/utils/JwtModule';

@Module({
  imports:[JwtModule.register(jwtModuleSource)],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
