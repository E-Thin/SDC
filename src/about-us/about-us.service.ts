import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AboutUsForUpdate } from './dto/AboutUsForUpdate';
import { AboutUsForCreate } from './dto/AboutUsForCreate';

@Injectable()
export class AboutUsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAboutUs() {
        return await this.prismaService.aboutUs.findMany();
    }

    async getAboutUsById(id: string) {
        return await this.prismaService.aboutUs.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                description: true,
                image: true,
            }
        });
    }

    async addAboutUs(aboutUsForCreate: AboutUsForCreate) {
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
            }
        });
    }

    async updateAboutUs(id: string, aboutUsForUpdate: AboutUsForUpdate) {
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
            }
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
            }
        });
    }
}
