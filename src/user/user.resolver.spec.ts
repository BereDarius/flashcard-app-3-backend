import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { CreateUserService } from './create/create-user.service';
import { ReadUserService } from './read/read-user.service';
import { UpdateUserService } from './update/update-user.service';
import { DeleteUserService } from './delete/delete-user.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserResolver', () => {
  let resolver: UserResolver;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userRepository: Repository<User>;
  const userRepositoryToken = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        CreateUserService,
        ReadUserService,
        UpdateUserService,
        DeleteUserService,
        {
          provide: userRepositoryToken,
          useClass: Repository,
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
