import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewsForUpdate } from './dto/NewsForUpdate';
import { NewsForCreate } from './dto/NewsForCreate';
import { NewsForResponse } from './dto/NewsForResponse';
import { AccountForToken } from 'src/auth/dto/AccountForToken';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async getNews(): Promise<NewsForResponse[]> {
    return await this.prisma.news.findMany({
      select: {
        id: true,
        title: true,
        body: true,
        thumbnailNews: true,
        views: true,
        description: true,
        account: true,
        created_at: true,
        typenews: {
          select: {
            id: true,
            nameTypeNews: true,
            description: true,
          }
        }
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }
  
  async getNewsById(id: string) {
    return await this.prisma.news.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        body: true,
        views: true,
        account: true,
        description: true,
        created_at: true,
        typenews: {
          select: {
            id: true,
            nameTypeNews: true,
            description: true,
          }
        }
      },
    });
  }

  async addNews(
    newsForCreate: NewsForCreate,
    account: AccountForToken,
  ): Promise<NewsForResponse> {
    return await this.prisma.news.create({
      data: {
        title: newsForCreate.title,
        body: newsForCreate.body,
        description: newsForCreate.description,
        thumbnailNews: newsForCreate.thumbnailNews,
        typenews: Array.isArray(newsForCreate.typenewsId)
        ? {
            connect: newsForCreate.typenewsId.map(id => ({ id }))
        }
        : {
            connect: { id: newsForCreate.typenewsId }
        },        account: { connect: { id: account.id } },
      },
      select: {
        id: true,
        title: true,
        body: true,
        thumbnailNews: true,
        views: true,
        description: true,
        created_at: true,
        typenews: {
          select: {
            id: true,
            nameTypeNews: true,
            description: true,
          }
        }
      },
    });
  }

  async updateNews(
    id: string,
    newsForUpdate: NewsForUpdate,
  ): Promise<NewsForResponse> {
    return await this.prisma.news.update({
      where: { id },
      data: {
        title: newsForUpdate.title,
        body: newsForUpdate.body,
        description: newsForUpdate.description,
        typenews: Array.isArray(newsForUpdate.typenews)
                ? {
                    connect: newsForUpdate.typenews.map(id => ({ id }))
                }
                : {
                    connect: { id: newsForUpdate.typenews }
                },
      },
      select: {
        id: true,
        title: true,
        body: true,
        description: true,
        views: true,
        created_at: true,
        thumbnailNews: true,
        typenews: true,
      },
    });
  }

  async deleteNews(id: string) {
    return await this.prisma.news.delete({
      where: { id },
      select: {
        id: true,
      },
    });
  }

  async incrementViewCount(id: string) {
    await this.prisma.news.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
  }
}
