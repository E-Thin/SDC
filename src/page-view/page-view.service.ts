import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PageViewService {
  constructor(private readonly prismaService: PrismaService) { }

  async incrementPageView() {
    await this.prismaService.pageView.upsert({
      where: { id: '' }, // Tìm bản ghi với id là chuỗi rỗng
      update: { views: { increment: 1 } }, // Cập nhật số lượt xem
      create: { id: '', views: 1, pageName: 'Home Page' }, // Tạo bản ghi mới với pageName
    });
  }

  async getPageView() {
    return this.prismaService.pageView.findFirst({
      where: { id: '' }, // Tìm bản ghi với id là chuỗi rỗng
    });
  }
}
