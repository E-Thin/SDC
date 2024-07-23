import { Controller, Get, Query, Request } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) { }

  @Get('news')
  async searchNews(@Query('keyword') keyword: string) {
    return await this.searchService.searchNews(keyword);
  }

  @Get('training-fields')
  async searchTrainingFields(@Query('keyword') keyword: string){
    return await this.searchService.searchTrainingFields(keyword);
  }

  @Get('event')
  async searchEvents(@Query('keyword') keyword: string){
    return await this.searchService.searchEvents(keyword);
  }
}
