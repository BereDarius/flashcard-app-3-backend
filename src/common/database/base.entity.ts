import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @Field(() => ID, { description: 'The entity id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'The entity is active', defaultValue: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Field({ description: 'The entity is archived', defaultValue: false })
  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @Field({ description: 'The entity creation date', nullable: true })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Field({ description: 'The entity created by', nullable: true })
  @Column({ type: 'varchar', length: 300, default: 'system' })
  createdBy: string;

  @Field({ description: 'The entity last changed date', nullable: true })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Field({ description: 'The entity last changed by', nullable: true })
  @Column({ type: 'varchar', length: 300, default: 'system' })
  lastChangedBy: string;

  @Field({ description: 'The entity internal comment', nullable: true })
  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment?: string;
}
