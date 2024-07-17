import { Test, TestingModule } from '@nestjs/testing';
import { TrainingFieldsService } from './training-fields.service';

describe('TrainingFieldsService', () => {
  let service: TrainingFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingFieldsService],
    }).compile();

    service = module.get<TrainingFieldsService>(TrainingFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
