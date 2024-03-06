import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { CreateUserService } from './create/create-user.service';
import { ReadUserService } from './read/read-user.service';
import { UpdateUserService } from './update/update-user.service';
import { DeleteUserService } from './delete/delete-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserResolver,
    CreateUserService,
    ReadUserService,
    UpdateUserService,
    DeleteUserService,
  ],
})
export class UserModule {}
