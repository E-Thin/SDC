import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentForCreate } from './dto/DepartmentForCreate';
import { DepartmentForUpdate } from './dto/DepartmentForUpdate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { AuthenticationGuard } from 'src/guard/authentication.guard';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Post()
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async addNewDepartment(@Body() departmentForCreate: DepartmentForCreate) {
        return await this.departmentService.addNewDepartment(departmentForCreate);
    }

    @Get()
    async getAllDepartments() {
        return await this.departmentService.getAllDepartments();
    }

    @Patch(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async updateDepartment(@Param('id') id: string,
    @Body() departmentForUpdate: DepartmentForUpdate){
        return await this.departmentService.updateDepartment(id, departmentForUpdate);
    }

    @Delete(':id')
    @UseGuards(AuthenticationGuard, AuthorizationGuard)
    @Roles(Role.Admin)
    async deleteDepartment(@Param('id') id: string) {
        return await this.departmentService.deleteDepartment(id);
    }
}
