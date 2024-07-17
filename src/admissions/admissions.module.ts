import { Module } from '@nestjs/common';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AdmissionsController],
  providers: [AdmissionsService, JwtService, PrismaService]
})
export class AdmissionsModule {}
