import { Injectable } from '@nestjs/common';
import {
  Env,
  EnvironmentService,
  Environments,
} from './environment/environment.service';
@Injectable()
export class ConfigService {
  constructor(private readonly environmentService: EnvironmentService) {}

  /**
   * Get the config setting.
   * In many cases, it get's environment variables by 'key' from '.env' file
   * @param key This is settings name or the environemnt variable (HTTPPORT, HTTPSPORT...) etc.
   * @returns Returns a value for the given settings key
   */
  get(key: keyof Env): string | number | boolean | Environments {
    return this.environmentService.EnvironmentVariables[key];
  }

  /**
   * Get All Env settings
   */
  get Env(): Env {
    return this.environmentService.EnvironmentVariables;
  }
}
