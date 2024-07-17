import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService, PrismaService, JwtService]
})
export class DepartmentModule {}
