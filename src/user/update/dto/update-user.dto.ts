import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/create/dto/create-user.dto';

@InputType()
export class UpdateUserInput extends CreateUserInput {
  @Field(() => ID, { description: 'The user id' })
  id: string;
}
