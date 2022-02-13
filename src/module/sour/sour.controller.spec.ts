import { Test, TestingModule } from '@nestjs/testing';
import { SourController } from './sour.controller';

describe('SourController', () => {
  let controller: SourController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourController],
    }).compile();

    controller = module.get<SourController>(SourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
