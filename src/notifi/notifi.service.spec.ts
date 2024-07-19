import { Test, TestingModule } from '@nestjs/testing';
import { NotifiService } from './notifi.service';

describe('NotifiService', () => {
  let service: NotifiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotifiService],
    }).compile();

    service = module.get<NotifiService>(NotifiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
