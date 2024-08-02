import { Injectable } from '@nestjs/common';
import { AccountForToken } from 'src/auth/dto/AccountForToken';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageForResponse } from './dto/ImageForResponse';
import { TYPE_IMAGE } from 'src/helpers/constant';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class FileService {
  constructor(
    private uploads: UploadService,
    private prismaService: PrismaService,
  ) {}

  async uploadImageAboutUs(
    
    file: Express.Multer.File,
    account: AccountForToken,
  ): Promise<ImageForResponse> {
    try {
      const image_path = await this.uploadImage(file, 'About-Us');
      const result = await this.prismaService.image.create({
        data: {
          path: image_path,
          accountId: account.id,
          typeImageId: TYPE_IMAGE.THUMBNAIL_ABOUT_US,
        },
      });
      return {
        id: result.id,
        fieldname: 'image',
        url: image_path,
        mimetype: file.mimetype,
        originalname: file.originalname,
        size: file.size,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async uploadImageTrainingFields(
    file: Express.Multer.File,
    accountId: AccountForToken,
  ): Promise<ImageForResponse> {
    try {
      const image_path = await this.uploadImage(file, 'Training-Fields');
      await this.prismaService.image.create({
        data: {
          path: image_path,
          accountId: accountId.id,
          typeImageId: TYPE_IMAGE.THUMBNAIL_TRAINING_FIELDS,
        },
      });
      return {
        fieldname: 'image',
        url: image_path,
        mimetype: file.mimetype,
        originalname: file.originalname,
        size: file.size,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async uploadImageAdmission(file: Express.Multer.File,
    accountId: AccountForToken): Promise<ImageForResponse> {
    try {
      const image_path = await this.uploadImage(file, 'Admission');
      await this.prismaService.image.create({
        data: {
          path: image_path,
          accountId: accountId.id,
          typeImageId: TYPE_IMAGE.ADMISSION,
        }
      })
      return {
        fieldname: 'image',
        url: image_path,
        mimetype: file.mimetype,
        originalname: file.originalname,
        size: file.size,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async uploadImageNews(file: Express.Multer.File,
    accountId: AccountForToken): Promise<ImageForResponse> {
    try {
      const image_path = await this.uploadImage(file, 'News');
      await this.prismaService.image.create({
        data: {
          path: image_path,
          accountId: accountId.id,
          typeImageId: TYPE_IMAGE.THUMBNAIL_NEWS,
        }
      })
      return {
        fieldname: 'image',
        url: image_path,
        mimetype: file.mimetype,
        originalname: file.originalname,
        size: file.size,
      };
    } catch (error) {
      console.error(error);
    }
  }

  private async uploadImage(
    file: Express.Multer.File,
    folder: string
  ): Promise<string> {
    const image_path = await this.uploads.uploadImageToCloudinary(file, folder);
    return image_path.url; 
  }
}