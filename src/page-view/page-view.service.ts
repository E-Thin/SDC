import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PageViewService {
  constructor(private readonly prismaService: PrismaService) {}

  async incrementPageView(id: string) {
    await this.prismaService.pageView.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
  }

  async getPageView(id: string) {
    return this.prismaService.pageView.findFirst({
      where: { id },
    });
  }
}
