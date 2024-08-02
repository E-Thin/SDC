import { Test, TestingModule } from '@nestjs/testing';
import { ContentAssetBlogController } from './content-asset-blog.controller';

describe('ContentAssetBlogController', () => {
  let controller: ContentAssetBlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentAssetBlogController],
    }).compile();

    controller = module.get<ContentAssetBlogController>(ContentAssetBlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
