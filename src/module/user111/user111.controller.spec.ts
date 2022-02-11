import { Test, TestingModule } from '@nestjs/testing';
import { User111Controller } from './user111.controller';

describe('User111Controller', () => {
  let controller: User111Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User111Controller],
    }).compile();

    controller = module.get<User111Controller>(User111Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
