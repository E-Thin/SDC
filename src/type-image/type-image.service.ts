import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeImageForCreate } from './dto/TypeImageForCreate';
import { TypeImageForResponse } from './dto/TypeImageForResponse';
import { TypeImageForUpdate } from './dto/TypeImageForUpdate';

@Injectable()
export class TypeImageService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTypeImage(typeImageForCreate: TypeImageForCreate): Promise <TypeImageForResponse> {
    return await this.prismaService.typeImage.create({
      data: {
        name: typeImageForCreate.name,
        description: typeImageForCreate.description,
      },
    });
  }

  async getTypeImage() {
    return await this.prismaService.typeImage.findMany();
  }

  async getTypeImageById(id: string) {
    return await this.prismaService.typeImage.findUnique({
      where: {
        id,
      },
    });
  }

  async updateTypeImage(id: string, typeImageForUpdate: TypeImageForUpdate): Promise <TypeImageForResponse> {
    return await this.prismaService.typeImage.update({
      where: {
        id
      },
      data: {
        name: typeImageForUpdate.name,
        description: typeImageForUpdate.description,
      },
    });
  }

  async deleteTypeImage(id: string) {
    return await this.prismaService.typeImage.delete({
      where: {
        id,
      },
    });
  }
}
