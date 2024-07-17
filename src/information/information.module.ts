import { Module } from '@nestjs/common';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InformationController],
  providers: [InformationService, JwtService, PrismaService]
})
export class InformationModule {}
