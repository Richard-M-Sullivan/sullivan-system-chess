import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { UsersModule } from '../users/users.module.js';
import { JwtModule } from '@nestjs/jwt';
import { SessionAuth } from './session-auth.provider.js';

@Module({
  providers: [AuthService, SessionAuth],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global:true,
    })
  ],
})

export class AuthModule {
}
