import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdmissionsForCreate } from './dto/AdmissionsForCreate';
import { AdmissionsForUpdate } from './dto/AdmissionsForUpdate';
import { AdmissionsForResponse } from './dto/AdmissionsForResponse';

@Injectable()
export class AdmissionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAdmissions(): Promise<AdmissionsForResponse[]> {
        return await this.prismaService.admissions.findMany({
            select: {
                id: true,
                title: true,
                body: true,
                created_at: true,
                updated_at: true,
            }
        });
    }

    async getAdmission(id: string): Promise <AdmissionsForResponse> {
        return await this.prismaService.admissions.findUnique({
            where: {
                id: id,
            }
        });
    }

    async createAdmission(admissionsForCreate: AdmissionsForCreate): Promise<AdmissionsForResponse> {
        return await this.prismaService.admissions.create({
            data: {
                title: admissionsForCreate.title,
                body: admissionsForCreate.body,
            }
        });
    }
    
    async updateAdmission(id: string, admissionsForUpdate: AdmissionsForUpdate): Promise<AdmissionsForResponse> {
        return await this.prismaService.admissions.update({
            where: {
                id: id,
            },
            data: {
                title: admissionsForUpdate.title,
                body: admissionsForUpdate.body,
            }
        });
    }

    async deleteAdmission(id: string) {
        return await this.prismaService.admissions.delete({
            where: {
                id: id,
            },
        });
    }
}
