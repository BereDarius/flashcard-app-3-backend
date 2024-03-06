/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentService],
    }).compile();

    service = module.get<EnvironmentService>(EnvironmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // EnvironmentService should correctly read and parse environment variables
  it('should correctly read and parse environment variables when environment variables are provided', () => {
    const environmentService = new EnvironmentService();

    expect(environmentService.EnvironmentVariables.POSTGRES_HOST).toBe(
      '127.0.0.1',
    );
    expect(environmentService.EnvironmentVariables.POSTGRES_PORT).toBe(5432);
    expect(environmentService.EnvironmentVariables.POSTGRES_DB).toBe(
      'flashcard_app_db',
    );
    expect(
      environmentService.EnvironmentVariables.POSTGRES_USER,
    ).not.toBeUndefined();
    expect(
      environmentService.EnvironmentVariables.POSTGRES_PASSWORD,
    ).not.toBeUndefined();

    // Default NODE_ENV value is "development", but Jest automatically sets it to "test"
    expect(environmentService.EnvironmentVariables.NODE_ENV).toBe('test');
    expect(environmentService.EnvironmentVariables.PORT).toBe(3000);
    expect(environmentService.EnvironmentVariables.RUN_MIGRATIONS).toBe(true);
  });
});
