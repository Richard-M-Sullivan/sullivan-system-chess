import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UserRepository } from './users.repository.js';

@Module({
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository]
})
export class UsersModule {}
