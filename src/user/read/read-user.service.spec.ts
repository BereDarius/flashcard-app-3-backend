import { Test, TestingModule } from '@nestjs/testing';
import { ReadUserService } from './read-user.service';

describe('ReadUserService', () => {
  let service: ReadUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadUserService],
    }).compile();

    service = module.get<ReadUserService>(ReadUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
