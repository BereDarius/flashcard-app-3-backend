import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';
import { ConfigService } from './config.service';
import { GraphQLConfigModule } from './graphql/graphql.module';

@Module({
  imports: [EnvironmentModule, GraphQLConfigModule],
  providers: [ConfigService],
})
export class ConfigModule {}
