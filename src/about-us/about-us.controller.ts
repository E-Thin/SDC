import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { AboutUsForCreate } from './dto/AboutUsForCreate';
import { AboutUsForUpdate } from './dto/AboutUsForUpdate';

@Controller('about-us')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) {}

  @Get()
  async getAboutUs() {
    return await this.aboutUsService.getAboutUs();
  }

  @Get(':id')
  async getAboutUsById(@Param('id') id: string) {
    return await this.aboutUsService.getAboutUsById(id);
  }

  @Post()
  async addAboutUs(@Body() aboutUsForCreate: AboutUsForCreate) {
    return await this.aboutUsService.addAboutUs(aboutUsForCreate);
  }

  @Patch(':id')
  async updateAboutUs(
    @Param('id') id: string,
    @Body() aboutUsForUpdate: AboutUsForUpdate,
  ) {
    return await this.aboutUsService.updateAboutUs(id, aboutUsForUpdate);
  }

  @Delete(':id')
  async deleteAboutUs(@Param('id') id: string) {
    return await this.aboutUsService.deleteAboutUs(id);
  }
}
