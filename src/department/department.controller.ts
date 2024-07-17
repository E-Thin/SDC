import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentForCreate } from './dto/DepartmentForCreate';
import { DepartmentForUpdate } from './dto/DepartmentForUpdate';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/decorator/role.enum';

@Controller('department')
@Roles(Role.Admin)
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Post()
    async addNewDepartment(@Body() departmentForCreate: DepartmentForCreate) {
        return await this.departmentService.addNewDepartment(departmentForCreate);
    }

    @Get()
    async getAllDepartments() {
        return await this.departmentService.getAllDepartments();
    }

    @Patch(':id')
    async updateDepartment(@Param() id: string,
    @Body() departmentForUpdate: DepartmentForUpdate){
        return await this.departmentService.updateDepartment(id, departmentForUpdate);
    }

    @Delete(':id')
    async deleteDepartment(@Param() id: string) {
        return await this.departmentService.deleteDepartment(id);
    }
}
