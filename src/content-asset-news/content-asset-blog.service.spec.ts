import { Test, TestingModule } from '@nestjs/testing';
import { ContentAssetBlogService } from './content-asset-blog.service';

describe('ContentAssetBlogService', () => {
  let service: ContentAssetBlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentAssetBlogService],
    }).compile();

    service = module.get<ContentAssetBlogService>(ContentAssetBlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
