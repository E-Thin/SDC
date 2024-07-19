import { Test, TestingModule } from '@nestjs/testing';
import { NotifiController } from './notifi.controller';

describe('NotifiController', () => {
  let controller: NotifiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotifiController],
    }).compile();

    controller = module.get<NotifiController>(NotifiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
