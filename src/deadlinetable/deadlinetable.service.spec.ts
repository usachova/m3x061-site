import { Test, TestingModule } from '@nestjs/testing';
import { DeadlinetableService } from './deadlinetable.service';

describe('DeadlinetableService', () => {
  let service: DeadlinetableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeadlinetableService],
    }).compile();

    service = module.get<DeadlinetableService>(DeadlinetableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
