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
import { PartnerService } from './partner.service';
import { PartnerForUpdate } from './dto/PartnerForUpdate';
import { PartnerForCreate } from './dto/PartnerForCreate';
import { Role } from 'src/decorator/role.enum';
import { Roles } from 'src/decorator/roles.decorator';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';

@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get()
  getPartner() {
    return this.partnerService.getPartner();
  }

  @Get(':id')
  getPartnerById(@Param('id') id: string) {
    return this.partnerService.getPartnerById(id);
  }

  @Post()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  addPartner(@Body() partnerForCreate: PartnerForCreate) {
    return this.partnerService.addPartner(partnerForCreate);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  async updatePartner(@Body() partnerForUpdate: PartnerForUpdate,
    @Param('id') id: string,
  ) {
    return this.partnerService.updatePartner(partnerForUpdate, id);
  }

  @Delete(':id')
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(Role.Admin)
  deletePartner(@Param('id') id: string) {
    return this.partnerService.deletePartner(id);
  }
}
