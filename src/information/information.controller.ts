import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { InformationService } from './information.service';
import { InforForCreate } from './dto/InforForCreate';
import { InforForUpdate } from './dto/InforForUpdate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('information')
export class InformationController {
    constructor(private readonly informationService: InformationService) {}

    @Post()
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async createInformation(@Body() inforForCreate: InforForCreate) {
        return await this.informationService.createInformation(inforForCreate);
    }

    @Get()
    async getInformation() {
        return await this.informationService.getInformation();
    }

    @Get(':id')
    async getInformationById(@Param('id') id: string) {
        return await this.informationService.getInformationById(id);
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async updateInformation(@Body() inforForUpdate: InforForUpdate,
    @Param('id') id: string) {
        return await this.informationService.updateInformation(id, inforForUpdate);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async deleteInformation(@Param('id') id: string) {
        return await this.informationService.deleteInformation(id);
    }

}
