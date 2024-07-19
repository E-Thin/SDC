import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TypeNewsService } from './type-news.service';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { TypeNewsForUpdate } from './dto/TypeNewsForUpdate';
import { TypeNewsForCreate } from './dto/TypeNewsForCreate';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('type-news')

export class TypeNewsController {
  constructor(private readonly typeNewsService: TypeNewsService) {}

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async createTypeNews(@Body() typeNewsForCreate: TypeNewsForCreate) {
    return this.typeNewsService.createTypeNews(typeNewsForCreate);
  }

  @Get()
  async getAllTypeNews() {
    return this.typeNewsService.getAllTypeNews();
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async updateTypeNews(
    @Body() typeNewsForUpdate: TypeNewsForUpdate,
    @Param('id') id: string) {
    return this.typeNewsService.updateTypeNews(id, typeNewsForUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async deleteTypeNews(@Param('id') id: string) {
    return this.typeNewsService.deleteTypeNews(id);
  }
}
