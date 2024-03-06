// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { Injectable } from '@nestjs/common';
import { cleanEnv, str, port, bool, ValidatorSpec } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export type Env = Readonly<{
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;

  NODE_ENV: Environments;
  PORT: number;
  RUN_MIGRATIONS: boolean;
}>;

@Injectable()
export class EnvironmentService {
  public readonly EnvironmentVariables: Env = cleanEnv(process.env, {
    POSTGRES_HOST: str({
      desc: 'Postgres Server Host',
      default: '127.0.0.1',
    }),
    POSTGRES_PORT: port({
      desc: 'Postgres Server Port',
      default: 5432,
    }),
    POSTGRES_DB: str({
      desc: 'Postgres Database Name',
      default: 'flashcard_app_db',
    }),
    POSTGRES_USER: str({
      desc: 'Postgres Database User',
    }),
    POSTGRES_PASSWORD: str({
      desc: 'Postgres Database Password',
    }),

    NODE_ENV: str({
      desc: 'Node Environment (development, test or production)',
      choices: ['production', 'development', 'test'],
      default: 'development',
    }) as ValidatorSpec<Env['NODE_ENV']>,
    PORT: port({
      desc: 'NestJS API Port Number',
      default: 3000,
    }),
    RUN_MIGRATIONS: bool({
      desc: 'Flag to determine if database migrations should be run on startup',
      default: true,
    }),
  });
}
