import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsForCreate } from './dto/AdmissionsForCreate';
import { AdmissionsForUpdate } from './dto/AdmissionsForUpdate';

@Controller('admissions')
export class AdmissionsController {
    constructor(private readonly admissionsService: AdmissionsService) {}

    @Post()
    async createAdmission(@Body() admissionsForCreate: AdmissionsForCreate) {
        return await this.admissionsService.createAdmission(admissionsForCreate);
    }

    @Get()
    async getAdmissions() {
        return await this.admissionsService.getAdmissions();
    }

    @Get(':id')
    async getAdmission(@Param('id') id: string) {
        return await this.admissionsService.getAdmission(id);
    }

    @Patch(':id')
    async updateAdmission(@Param('id') id: string, @Body() admissionsForUpdate: AdmissionsForUpdate) {
        return await this.admissionsService.updateAdmission(id, admissionsForUpdate);
    }

    @Delete(':id')
    async deleteAdmission(@Param('id') id: string) {
        return await this.admissionsService.deleteAdmission(id);
    }
}
