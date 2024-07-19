import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InforForUpdate } from './dto/InforForUpdate';
import { InforForResponse } from './dto/InforForResponse';
import { InforForCreate } from './dto/InforForCreate';

@Injectable()
export class InformationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createInformation(inforForCreate: InforForCreate) {
    return await this.prismaService.information.create({
      data: {
        title: inforForCreate.title,
        body: inforForCreate.body,
      }
    });
  }

  async getInformation() {
    return await this.prismaService.information.findMany();
  }

  async getInformationById(id: string) {
    return await this.prismaService.information.findUnique({
      where: {
        id,
      },
    });
  }

  async updateInformation(
    id: string,
    inforForUpdate: InforForUpdate,
  ): Promise<InforForResponse> {
    return await this.prismaService.information.update({
      where: {
        id,
      },
      data: {
        title: inforForUpdate.title,
        body: inforForUpdate.body,
      },
      select: {
        id: true,
        title: true,
        body: true,
      }
    });
  }

  async deleteInformation(id: string) {
    return await this.prismaService.information.delete({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
      }
    });
  }
}
