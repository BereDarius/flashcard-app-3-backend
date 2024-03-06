import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/database/base.entity';

@ObjectType()
@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Field({ description: 'The user email' })
  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Field({ description: 'The user username' })
  @Column({ type: 'varchar', length: 50 })
  username: string;

  @Field({ description: 'The user password' })
  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Field({ description: 'The user bio (optional)', nullable: true })
  @Column({ type: 'varchar', length: 500, nullable: true })
  bio?: string;
}
