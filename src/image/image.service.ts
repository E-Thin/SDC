import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageForResponse } from './dto/ImageForRespone';

@Injectable()
export class ImageService {
  constructor(private prismaService: PrismaService) { }

  async getImageAboutUs(): Promise<Array<ImageForResponse> | undefined> {
    try {
      return await this.prismaService.image.findMany({
        select: {
          id: true,
          accountId: true,
          path: true,
          aboutUsId: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getImageTrainingFields(): Promise<Array<ImageForResponse> | undefined> {
    try {
      return await this.prismaService.image.findMany({
        select: {
          id: true,
          accountId: true,
          path: true,
          trainingfieldsId: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getImageAdmissions(): Promise<Array<ImageForResponse> | undefined> {
    try {
      return await this.prismaService.image.findMany({
        select: {
          id: true,
          accountId: true,
          path: true,
          admissionsId: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
