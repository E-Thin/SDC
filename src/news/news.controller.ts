import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsForUpdate } from './dto/NewsForUpdate';
import { NewsForCreate } from './dto/NewsForCreate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews() {
    return await this.newsService.getNews();
  }

  @Get(':id')
  async getNewsById(@Param('id') id: string) {
    return await this.newsService.getNewsById(id);
  }

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async addNews(@Body() newsForCreate: NewsForCreate, @Request() req) {
    return await this.newsService.addNews(newsForCreate, req?.user);
  }

  @Post('/increment-view-count/:id')
  async incrementViewCount(@Param('id') id: string) {
    return await this.newsService.incrementViewCount(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async updateNews(
    @Param('id') id: string,
    @Body() newsForUpdate: NewsForUpdate,
  ) {
    return await this.newsService.updateNews(id, newsForUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async deleteNews(@Param('id') id: string) {
    return await this.newsService.deleteNews(id);
  }
}
