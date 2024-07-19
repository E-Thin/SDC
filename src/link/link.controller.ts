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
import { LinkService } from './link.service';
import { LinkForUpdate } from './dto/LinkForUpdate';
import { LinkForCreate } from './dto/LinkForCreate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  createLink(@Body() linkForCreate: LinkForCreate) {
    return this.linkService.createLink(linkForCreate);
  }

  @Get()
  getLink() {
    return this.linkService.getLink();
  }

  @Patch(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  updateLink(@Param('id') id: string, @Body() linkForUpdate: LinkForUpdate) {
    return this.linkService.updateLink(id, linkForUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  deleteLink(@Param('id') id: string) {
    return this.linkService.deleteLink(id);
  }
}
