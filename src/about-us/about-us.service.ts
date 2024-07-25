import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AboutUsForUpdate } from './dto/AboutUsForUpdate';
import { AboutUsForCreate } from './dto/AboutUsForCreate';
import { AboutUsForResponse } from './dto/AboutUsForResponse';

@Injectable()
export class AboutUsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAboutUs(): Promise<AboutUsForResponse[]> {
    return await this.prismaService.aboutUs.findMany(
      {
        select: {
          id: true,
          name: true,
          description: true,
          image: {
            select: {
              id: true,
              url: true,
            }
          },
          created_at: true,
          updated_at: true,
        },
      },
    );
  }

  async getAboutUsById(id: string):Promise <AboutUsForResponse> {
    return await this.prismaService.aboutUs.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        image: {
          select: {
            id: true,
            url: true,
          }
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async addAboutUs(aboutUsForCreate: AboutUsForCreate): Promise<AboutUsForResponse> {
    return await this.prismaService.aboutUs.create({
      data: {
        name: aboutUsForCreate.name,
        description: aboutUsForCreate.description,
        image: { connect: { id: aboutUsForCreate.imageId } },
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async updateAboutUs(id: string, aboutUsForUpdate: AboutUsForUpdate):Promise <AboutUsForResponse> {
    return await this.prismaService.aboutUs.update({
      where: { id },
      data: {
        name: aboutUsForUpdate.name,
        description: aboutUsForUpdate.description,
        image: { connect: { id: aboutUsForUpdate.imageId } },
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async deleteAboutUs(id: string) {
    return await this.prismaService.aboutUs.delete({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      },
    });
  }
}
