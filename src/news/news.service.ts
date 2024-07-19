import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewsForUpdate } from './dto/NewsForUpdate';
import { NewsForCreate } from './dto/NewsForCreate';
import { NewsForResponse } from './dto/NewsForResponse';
import { AccountForToken } from 'src/auth/dto/AccountForToken';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async getNews(): Promise <NewsForResponse[]> {
    return await this.prisma.news.findMany();
  }

  async getNewsById(id: string) {
    return await this.prisma.news.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        body: true,
        account: true,
        created_at: true,
        typenewsId: true,
      }
    });
  }

  async addNews( newsForCreate: NewsForCreate,
    account: AccountForToken): Promise<NewsForResponse> {
    return await this.prisma.news.create({
      data: {
        title: newsForCreate.title,
        body: newsForCreate.body,
        typenews: { connect: { id: newsForCreate.typenewsId}},
        account: { connect: { id: account.id } },
      },
      select: {
        id: true,
        title: true,
        body: true,
        created_at: true,
        typenewsId: true,
      }
    });
  }

  async updateNews(
    id: string,
    newsForUpdate: NewsForUpdate,
  ): Promise<NewsForUpdate> {
    return await this.prisma.news.update({
      where: { id },
      data: {
        title: newsForUpdate.title,
        body: newsForUpdate.body,
        typenewsId: newsForUpdate.typenewsId,
      },
      select: {
        id: true,
        title: true,
        body: true,
        typenewsId: true,
      },
    });
  }

  async deleteNews(id: string) {
    return await this.prisma.news.delete({
      where: { id },
      select: {
        id: true
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
