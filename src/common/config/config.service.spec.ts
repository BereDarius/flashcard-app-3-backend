import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { EnvironmentService } from './environment/environment.service';

describe('ConfigService', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentService, ConfigService],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(configService).toBeDefined();
  });

  // Should return a value for a valid key
  it('should return a value when a valid key is provided', () => {
    const key = 'POSTGRES_HOST';
    const expectedValue = '127.0.0.1';

    const result = configService.get(key);

    expect(result).toEqual(expectedValue);
  });
});
