import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DepartmentForUpdate } from './dto/DepartmentForUpdate';
import { DepartmentForResponse } from './dto/DepartmentForResponse';
import { DepartmentForCreate } from './dto/DepartmentForCreate';

@Injectable()
export class DepartmentService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllDepartments(): Promise<Array<DepartmentForResponse>> {
    try {
      return this.prismaService.department.findMany({
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async addNewDepartment(departmentForCreate: DepartmentForCreate): Promise<DepartmentForResponse> {
    try {
      return this.prismaService.department.create({
        data: {
          title: departmentForCreate.title,
          description: departmentForCreate.description,
        },
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async updateDepartment(
    id: string,
    departmentForUpdate: DepartmentForUpdate,
  ): Promise<DepartmentForResponse> {
    try {
      return this.prismaService.department.update({
        where: {
          id,
        },
        data: {
          title: departmentForUpdate.title,
          description: departmentForUpdate.description,
        },
        select: {
          id: true,
          title: true,
          created_at: true,
          updated_at: true,
          description: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async deleteDepartment(id: string): Promise<DepartmentForResponse> {
    try {
      return this.prismaService.department.delete({
        where: {
          id,
        },
        select: {
          id: true,
          title: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }
}
