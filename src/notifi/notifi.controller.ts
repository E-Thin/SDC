import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { NotifiService } from './notifi.service';
import { NotifiForCreate } from './dto/NotifiForCreate';
import { NotifiForUpdate } from './dto/NotifiForUpdate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('notifi')
export class NotifiController {
  constructor(private readonly notifiService: NotifiService) {}

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async createNotifi(@Body() notifiForCreate: NotifiForCreate) {
    return await this.notifiService.createNotifi(notifiForCreate);
  }

  @Get()
  async getNotifi() {
    return await this.notifiService.getNotifi();
  }

  @Get('daotao')
  async getNotifiDaotao() {
    return await this.notifiService.getNotifiDaotao();
  }

  @Get('taichinh')
  async getNotifiTaiChinh () {
    return await this.notifiService.getNotifiTaiChinh()
  }

  @Get('CTSV')
  async getNotifiCTSV () {
    return await this.notifiService.getNotifiCTSV()
  }

  @Get(':id')
  async getNotifiById(@Param('id') id: string) {
    return await this.notifiService.getNotifiById(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async updateNotifi(
    @Param('id') id: string,
    notifiForUpdate: NotifiForUpdate,
  ) {
    return await this.notifiService.updateNotifi(id, notifiForUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async deleteNotifi(@Param('id') id: string) {
    return await this.notifiService.deleteNotifi(id);
  }

}
