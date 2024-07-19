import { Module } from '@nestjs/common';
import { TypeNewsController } from './type-news.controller';
import { TypeNewsService } from './type-news.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TypeNewsController],
  providers: [TypeNewsService, JwtService, PrismaService]
})
export class TypeNewsModule {}
