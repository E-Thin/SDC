import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TrainingFieldsForUpdate } from './dto/TrainingFieldsForUpdate';
import { TrainingFieldsForResponse } from './dto/TrainingFieldsForResponse';
import { TrainingFieldsForCreate } from './dto/TrainingFieldsForCreate';

@Injectable()
export class TrainingFieldsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTrainingFields(
    trainingFieldsForCreate: TrainingFieldsForCreate,
  ): Promise<TrainingFieldsForResponse> {
    try {
      return this.prismaService.trainingFields.create({
        data: {
          body: trainingFieldsForCreate.body,
          title: trainingFieldsForCreate.title,
          thumbnailTrainingFields: trainingFieldsForCreate.thumbnailTrainingFields,
        },
        select: {
          id: true,
          title: true,
          body: true,
          thumbnailTrainingFields: true,
          created_at: true,
          updated_at: true,
        },
      });
    } catch (error) {}
  }

  async getTrainingFields() {
    return this.prismaService.trainingFields.findMany();
  }

  async getTrainingFieldsById(id: string) {
    try {
      return this.prismaService.trainingFields.findUnique({
        where: {
          id: id,
        },
      }); 
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async updateTrainingFields(
    id: string,
    trainingFieldsForUpdate: TrainingFieldsForUpdate,
  ): Promise<TrainingFieldsForResponse> {
    try {
      return this.prismaService.trainingFields.update({
        where: {
          id,
        },
        data: {
          body: trainingFieldsForUpdate.body,
          title: trainingFieldsForUpdate.title,
          thumbnailTrainingFields: trainingFieldsForUpdate.thumbnailTrainingFields, 
        },
        select: {
          id: true,
          title: true,
          body: true,
          thumbnailTrainingFields: true,
          created_at: true,
          updated_at: true,
        },
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteTrainingFields(id: string) {
    return this.prismaService.trainingFields.delete({
      where: {
        id: id,
      },
      select: {
        id: true
      }
    });
  }
}
