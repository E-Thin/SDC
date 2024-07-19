import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsForCreate } from './dto/AdmissionsForCreate';
import { AdmissionsForUpdate } from './dto/AdmissionsForUpdate';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';

@Controller('admissions')

export class AdmissionsController {
    constructor(private readonly admissionsService: AdmissionsService) {}

    @Post()
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
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
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async updateAdmission(@Param('id') id: string, @Body() admissionsForUpdate: AdmissionsForUpdate) {
        return await this.admissionsService.updateAdmission(id, admissionsForUpdate);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async deleteAdmission(@Param('id') id: string) {
        return await this.admissionsService.deleteAdmission(id);
    }
}
