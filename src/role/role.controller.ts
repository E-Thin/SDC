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
import { RoleForPost } from './dto/RoleForPost';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { RoleService } from './role.service';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';

@Controller('roles')
@UseGuards(AuthenticationGuard, AuthorizationGuard)
@Roles(Role.Admin)
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get()
  async getAllRoles() {
    return await this.roleService.getAllRoles();
  }

  @Post()
  async addOneRole(@Body() roleForPost: RoleForPost) {
    return await this.roleService.addNewRole(roleForPost);
  }

  @Patch(':id')
  async updateOneRole(
    @Param('id') id: string,
    @Body() roleForUpdate: RoleForPost,
  ) {
    return await this.roleService.updateOneRole(id, roleForUpdate);
  }

  @Delete(':id')
  async deleteOneRole(@Param('id') idRole: string) {
    return await this.roleService.deleteOneRule(idRole);
  }
}
