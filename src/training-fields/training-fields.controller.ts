import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TrainingFieldsService } from './training-fields.service';
import { TrainingFieldsForUpdate } from './dto/TrainingFieldsForUpdate';
import { TrainingFieldsForCreate } from './dto/TrainingFieldsForCreate';
import { Role } from 'src/decorator/role.enum';
import { Roles } from 'src/decorator/roles.decorator';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('training-fields')
export class TrainingFieldsController {
    constructor(private readonly trainingFieldsService: TrainingFieldsService) {}

    @Post()
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async createTrainingFields(@Body() trainingFieldsForCreate: TrainingFieldsForCreate) {
        return this.trainingFieldsService.createTrainingFields(trainingFieldsForCreate);
    }

    @Get()
    async getTrainingFields() {
        return this.trainingFieldsService.getTrainingFields();
    }

    @Get(':id')
    async getTrainingFieldsById(@Param('id') id: string) {
        return this.trainingFieldsService.getTrainingFieldsById(id);
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async updateTrainingFields(@Param('id') id: string,
    @Body() trainingFieldsForUpdate: TrainingFieldsForUpdate) {
        return this.trainingFieldsService.updateTrainingFields(id, trainingFieldsForUpdate);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    async deleteTrainingFields(@Param('id') id: string) {
        return this.trainingFieldsService.deleteTrainingFields(id);
    }
}
