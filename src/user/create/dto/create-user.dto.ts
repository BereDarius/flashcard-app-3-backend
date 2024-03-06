import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'The user email' })
  email: string;

  @Field({ description: 'The user username' })
  username: string;

  @Field({ description: 'The user password' })
  password: string;

  @Field({ description: 'The user bio (optional)', nullable: true })
  bio?: string;
}
