import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdmissionsForCreate } from './dto/AdmissionsForCreate';
import { AdmissionsForUpdate } from './dto/AdmissionsForUpdate';

@Injectable()
export class AdmissionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getAdmissions() {
        return await this.prismaService.admissions.findMany();
    }

    async getAdmission(id: string) {
        return await this.prismaService.admissions.findUnique({
            where: {
                id: id,
            },
        });
    }

    async createAdmission(admissionsForCreate: AdmissionsForCreate) {
        return await this.prismaService.admissions.create({
            data: admissionsForCreate,
        });
    }
    
    async updateAdmission(id: string, admissionsForUpdate: AdmissionsForUpdate) {
        return await this.prismaService.admissions.update({
            where: {
                id: id,
            },
            data: admissionsForUpdate,
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
