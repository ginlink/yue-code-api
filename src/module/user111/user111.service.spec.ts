import { Test, TestingModule } from '@nestjs/testing';
import { User111Service } from './user111.service';

describe('User111Service', () => {
  let service: User111Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User111Service],
    }).compile();

    service = module.get<User111Service>(User111Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
