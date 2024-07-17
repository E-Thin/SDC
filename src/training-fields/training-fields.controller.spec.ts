import { Test, TestingModule } from '@nestjs/testing';
import { TrainingFieldsController } from './training-fields.controller';

describe('TrainingFieldsController', () => {
  let controller: TrainingFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingFieldsController],
    }).compile();

    controller = module.get<TrainingFieldsController>(TrainingFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
