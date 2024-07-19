import { Module } from '@nestjs/common';
import { NotifiController } from './notifi.controller';
import { NotifiService } from './notifi.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NotifiController],
  providers: [NotifiService, JwtService, PrismaService]
})
export class NotifiModule {}
