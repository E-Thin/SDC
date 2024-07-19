import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { EventForCreate } from './dto/EventForCreate';
import { EventForUpdate } from './dto/EventForUpdate';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';

@Controller('event')

export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getEvent() {
    return await this.eventService.getEvent();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return await this.eventService.getEventById(id);
  }

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async addEvent(@Body() eventForCreate: EventForCreate,
  @Request() req) {
    return await this.eventService.addEvent(eventForCreate, req?.user);
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async updateEvent(@Body() eventForUpdate: EventForUpdate, @Param('id') id: string) {
    return await this.eventService.updateEvent(eventForUpdate, id);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  async deleteEvent(@Param('id') id: string) {
    return await this.eventService.deleteEvent(id);
  }
}
