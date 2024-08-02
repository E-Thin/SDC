import { Test, TestingModule } from '@nestjs/testing';
import { PageViewController } from './page-view.controller';

describe('PageViewController', () => {
  let controller: PageViewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageViewController],
    }).compile();

    controller = module.get<PageViewController>(PageViewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
