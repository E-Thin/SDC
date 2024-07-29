import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TitleSearchForResponse } from './dto/TitleSearchForResponse';

@Injectable()
export class SearchService {
  constructor(private prismaService: PrismaService) {}

  async searchNews(keyword: string): Promise<Array<TitleSearchForResponse>> {
    try {
      const regex = new RegExp(keyword, 'i');
      const news = await this.prismaService.news.findMany({
        where: {
          title: {
            contains: regex.source,
          },
        },
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
        },
      });
      return news;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'An error occurred while searching for news',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async searchTrainingFields(
    keyword: string,
  ): Promise<Array<TitleSearchForResponse>> {
    try {
      const regex = new RegExp(keyword, 'i');
      const news = await this.prismaService.trainingFields.findMany({
        where: {
          title: {
            contains: regex.source,
          },
        },
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
        },
      });
      return news;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'An error occurred while searching for news',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async searchEvents(
    keyword: string,
  ): Promise<Array<TitleSearchForResponse>> {
    try {
      const regex = new RegExp(keyword, 'i');
      const news = await this.prismaService.event.findMany({
        where: {
          title: {
            contains: regex.source,
          },
        },
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
        },
      });
      return news;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'An error occurred while searching for news',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
