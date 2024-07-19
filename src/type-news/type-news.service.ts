import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeNewsForResponse } from './dto/TypeNewsForResponse';
import { TypeNewsForUpdate } from './dto/TypeNewsForUpdate';
import { TypeNewsForCreate } from './dto/TypeNewsForCreate';

@Injectable()
export class TypeNewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllTypeNews(): Promise<Array<TypeNewsForResponse>> {
    try {
      return this.prismaService.typeNews.findMany({
        select: {
          id: true,
          nameTypeNews: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async createTypeNews(
    typeNewsForCreate: TypeNewsForCreate,
  ): Promise<TypeNewsForResponse> {
    try {
      return this.prismaService.typeNews.create({
        data: {
          nameTypeNews: typeNewsForCreate.nameTypeNews,
          description: typeNewsForCreate.description,
        },
        select: {
          id: true,
          nameTypeNews: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async updateTypeNews(
    id: string,
    typeNewsForUpdate: TypeNewsForUpdate,
  ): Promise<TypeNewsForResponse> {
    try {
      return this.prismaService.typeNews.update({
        where: {
          id,
        },
        data: {
          nameTypeNews: typeNewsForUpdate.nameTypeNews,
          description: typeNewsForUpdate.description,
        },
        select: {
          id: true,
          nameTypeNews: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async deleteTypeNews(id: string): Promise<TypeNewsForResponse> {
    try {
      return this.prismaService.typeNews.delete({
        where: { id },
        select: {
          id: true,
          nameTypeNews: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }
}
