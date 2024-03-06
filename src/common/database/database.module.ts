import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { databaseConnection } from './database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConnection), ConfigModule],
})
export class DatabaseModule {}
