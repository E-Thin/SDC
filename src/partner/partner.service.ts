import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartnerForUpdate } from './dto/PartnerForUpdate';
import { PartnerForCreate } from './dto/PartnerForCreate';

@Injectable()
export class PartnerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPartner() {
    return await this.prismaService.partner.findMany();
  }

  async getPartnerById(id: string) {
    return await this.prismaService.partner.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async addPartner(partnerForCreate: PartnerForCreate) {
    return await this.prismaService.partner.create({
      data: {
        name: partnerForCreate.name,
        imageId: partnerForCreate.imageId,
      },
      select: {
        id: true,
        name: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async updatePartner(partnerForUpdate: PartnerForUpdate, id: string) {
    return await this.prismaService.partner.update({
      where: { id },
      data: {
        name: partnerForUpdate.name,
        imageId: partnerForUpdate.imageId,
      },
      select: {
        id: true,
        name: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async deletePartner(id: string) {
    return await this.prismaService.partner.delete({
      where: { id },
      select: {
        id: true,
      },
    });
  }
}
