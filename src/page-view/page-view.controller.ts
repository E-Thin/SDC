import { Controller, Get, Param, Post } from '@nestjs/common';
import { PageViewService } from './page-view.service';

@Controller('page-view')
export class PageViewController {
  constructor(private readonly pageViewService: PageViewService) {}

  @Post('increment/:id')
  async incrementPageView(@Param('id') id: string) {
    return await this.pageViewService.incrementPageView(id);
  }

  @Get(':id')
  async getPageView(@Param('id') id: string) {
    return await this.pageViewService
    
    .getPageView(id);
  }
}
