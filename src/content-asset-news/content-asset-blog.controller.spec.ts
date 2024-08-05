import { Test, TestingModule } from '@nestjs/testing';
import { ContentAssetNewsController } from './content-asset-blog.controller';

describe('ContentAssetNewsController', () => {
  let controller: ContentAssetNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentAssetNewsController],
    }).compile();

    controller = module.get<ContentAssetNewsController>(ContentAssetNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
