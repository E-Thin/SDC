import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [UploadService, PrismaService],
  exports: [UploadService]
})
export class UploadModule {}
