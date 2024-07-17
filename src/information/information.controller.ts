import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InformationService } from './information.service';
import { InforForCreate } from './dto/InforForCreate';
import { InforForUpdate } from './dto/InforForUpdate';

@Controller('information')
export class InformationController {
    constructor(private readonly informationService: InformationService) {}

    @Post()
    async createInformation(@Body() inforForCreate: InforForCreate) {
        return await this.informationService.createInformation(inforForCreate);
    }

    @Get()
    async getInformation() {
        return await this.informationService.getInformation();
    }

    @Get(':id')
    async getInformationById(id: string) {
        return await this.informationService.getInformationById(id);
    }

    @Patch(':id')
    async updateInformation(@Body() inforForUpdate: InforForUpdate,
    @Param() id: string) {
        return await this.informationService.updateInformation(id, inforForUpdate);
    }

    @Delete(':id')
    async deleteInformation(id: string) {
        return await this.informationService.deleteInformation(id);
    }

}
