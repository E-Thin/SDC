import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TypeImageService } from './type-image.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { TypeImageForUpdate } from './dto/TypeImageForUpdate';

@Controller('type-image')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Roles(Role.Admin)
export class TypeImageController {
  constructor(private readonly typeImageService: TypeImageService) {}

  @Post()
  async createTypeImage(@Body() typeImageForCreate: TypeImageForUpdate) {
    return await this.typeImageService.createTypeImage(typeImageForCreate);
  }

  @Get()
  async getTypeImage() {
    return await this.typeImageService.getTypeImage();
  }

  @Get(':id')
  async getTypeImageById(@Param('id') id: string) {
    return await this.typeImageService.getTypeImageById(id);
  }

  @Patch(':id')
  async updateTypeImage(@Param('id') id: string,
  @Body() typeImageForUpdate: TypeImageForUpdate) {
    return await this.typeImageService.updateTypeImage(id, typeImageForUpdate);
  }

  @Delete(':id')
  async deleteTypeImage(@Param('id') id: string) {
    return await this.typeImageService.deleteTypeImage(id);
  }
}
