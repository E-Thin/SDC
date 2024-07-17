import { Module } from '@nestjs/common';
import { TrainingFieldsController } from './training-fields.controller';
import { TrainingFieldsService } from './training-fields.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TrainingFieldsController],
  providers: [TrainingFieldsService, JwtService, PrismaService]
})
export class TrainingFieldsModule {}
