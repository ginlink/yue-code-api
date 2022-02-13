import { Test, TestingModule } from '@nestjs/testing';
import { SourService } from './sour.service';

describe('SourService', () => {
  let service: SourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourService],
    }).compile();

    service = module.get<SourService>(SourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
