import { Test, TestingModule } from '@nestjs/testing';
import { DeadlineTableService } from './deadlinetable.service';

describe('DeadlinetableService', () => {
  let service: DeadlineTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeadlineTableService],
    }).compile();

    service = module.get<DeadlineTableService>(DeadlineTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
