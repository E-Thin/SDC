import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotifiForUpdate } from './dto/NotifiForUpdate';
import { NotifiForCreate } from './dto/NotifiForCreate';
import { NotifiForResponse } from './dto/NotifiForResponse';

@Injectable()
export class NotifiService {
  constructor(private prismaService: PrismaService) {}

  async createNotifi(notifiForCreate: NotifiForCreate): Promise<NotifiForResponse> {
    return await this.prismaService.notifi.create({
      data: {
        title: notifiForCreate.title,
        content: notifiForCreate.content,
        thumbnailNotifi: notifiForCreate.thumbnailNotifi,
        departmentId: notifiForCreate.departmentId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        thumbnailNotifi: true,
        account: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        department: {
          select: {
            id: true,
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async getNotifi(): Promise<Array<NotifiForResponse>> {
    return await this.prismaService.notifi.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        thumbnailNotifi: true,
        account: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        department: {
          select: {
            id: true,
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async getNotifiById(id: string): Promise<NotifiForResponse> {
    return await this.prismaService.notifi.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        thumbnailNotifi: true,
        department: {
          select: {
            id: true,
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        account: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async updateNotifi(
    id: string,
    notifiForUpdate: NotifiForUpdate,
  ): Promise<NotifiForResponse> {
    return await this.prismaService.notifi.update({
      where: {
        id,
      },
      data: {
        content: notifiForUpdate.content,
        title: notifiForUpdate.title,
        departmentId: notifiForUpdate.departmentId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        thumbnailNotifi: true,
        account: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        department: {
          select: {
            id: true,
            title: true,
            description: true,
            created_at: true,
            updated_at: true,
          },
        },
        created_at: true,
        updated_at: true,
      }
    });
  }

  async deleteNotifi(id: string) {
    return await this.prismaService.notifi.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });
  }
}
