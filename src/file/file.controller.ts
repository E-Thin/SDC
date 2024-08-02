import {
  Controller,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';

@Controller('file')
@ApiTags('file')
@ApiBearerAuth('Authorization')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Roles(Role.Admin)
export class FileController {
  constructor(private fileService: FileService) {}

  @Post("/upload-image-about-us")
  @UseInterceptors(FileInterceptor('image'))
  async uploadImageAboutUs(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return await this.fileService.uploadImageAboutUs(file, req?.user)
  }

  @Post("/upload-image-training-fields")
  @UseInterceptors(FileInterceptor('image'))
  async uploadImageTrainingFields(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return await this.fileService.uploadImageTrainingFields(file, req?.user)
  }

  @Post("/upload-image-admission")
  @UseInterceptors(FileInterceptor('image'))
  async uploadImageAdmission(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return await this.fileService.uploadImageAdmission(file, req?.user)
  }

  @Post("/upload-image-news")
  @UseInterceptors(FileInterceptor('image'))
  async uploadImageNews(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return await this.fileService.uploadImageNews(file, req?.user)
  }

}
