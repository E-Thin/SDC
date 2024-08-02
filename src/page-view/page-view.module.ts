import { Module } from '@nestjs/common';
import { PageViewController } from './page-view.controller';
import { PageViewService } from './page-view.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PageViewController],
  providers: [PageViewService, PrismaService]
})
export class PageViewModule {}
