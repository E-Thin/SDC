import { Controller, Get, Param, Post } from '@nestjs/common';
import { PageViewService } from './page-view.service';

@Controller('page-view')
export class PageViewController {
  constructor(private readonly pageViewService: PageViewService) {}

  @Post('increment')
  async incrementPageView() {
    return await this.pageViewService.incrementPageView();
  }

  @Get('view')
  async getPageView() {
    return await this.pageViewService.getPageView();
  }
}
