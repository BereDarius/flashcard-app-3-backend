import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { CreateUserService } from './create/create-user.service';
import { ReadUserService } from './read/read-user.service';
import { UpdateUserService } from './update/update-user.service';
import { DeleteUserService } from './delete/delete-user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        CreateUserService,
        ReadUserService,
        UpdateUserService,
        DeleteUserService,
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
