import { Args, ID, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserInput } from './create/dto/create-user.dto';
import { UpdateUserInput } from './update/dto/update-user.dto';
import { CreateUserService } from './create/create-user.service';
import { ReadUserService } from './read/read-user.service';
import { UpdateUserService } from './update/update-user.service';
import { DeleteUserService } from './delete/delete-user.service';
import { ConflictException } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly readUserService: ReadUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const userExists = await this.readUserService.checkIfUserExists(
      createUserInput.email,
    );

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    return this.createUserService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.readUserService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.readUserService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.updateUserService.update(updateUserInput);
  }
}
