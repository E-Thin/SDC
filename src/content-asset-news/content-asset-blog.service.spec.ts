import { Test, TestingModule } from '@nestjs/testing';
import { ContentAssetNewsService } from './content-asset-blog.service';

describe('ContentAssetNewsService', () => {
  let service: ContentAssetNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentAssetNewsService],
    }).compile();

    service = module.get<ContentAssetNewsService>(ContentAssetNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
