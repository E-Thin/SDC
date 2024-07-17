import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TrainingFieldsService } from './training-fields.service';
import { TrainingFieldsForUpdate } from './dto/TrainingFieldsForUpdate';
import { TrainingFieldsForCreate } from './dto/TrainingFieldsForCreate';
import { Role } from 'src/decorator/role.enum';
import { Roles } from 'src/decorator/roles.decorator';

@Controller('training-fields')
export class TrainingFieldsController {
    constructor(private readonly trainingFieldsService: TrainingFieldsService) {}

    @Post()
    @Roles(Role.Admin)
    async createTrainingFields(@Body() trainingFieldsForCreate: TrainingFieldsForCreate) {
        return this.trainingFieldsService.createTrainingFields(trainingFieldsForCreate);
    }

    @Get()
    async getTrainingFields() {
        return this.trainingFieldsService.getTrainingFields();
    }

    @Get(':id')
    async getTrainingFieldsById(@Param() id: string) {
        return this.trainingFieldsService.getTrainingFieldsById(id);
    }

    @Patch(':id')
    @Roles(Role.Admin)
    async updateTrainingFields(@Param() id: string,
    @Body() trainingFieldsForUpdate: TrainingFieldsForUpdate) {
        return this.trainingFieldsService.updateTrainingFields(id, trainingFieldsForUpdate);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    async deleteTrainingFields(@Param() id: string) {
        return this.trainingFieldsService.deleteTrainingFields(id);
    }
}
