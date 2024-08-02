import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ImageService } from './image.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';


@Controller('images')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@UseGuards(AuthenticationGuard, AuthorizationGuard)
export class ImageController {
  constructor(private imageService: ImageService) { }
  @Get("about-us")
  async getImageAboutUs() {
    return await this.imageService.getImageAboutUs()
  }

  @Get("training-fields")
  async getImageTrainingFields() {
    return await this.imageService.getImageTrainingFields()
  }

  @Get("admissions")
  async getImageAdmissions() {
    return await this.imageService.getImageAdmissions()
  }
}
