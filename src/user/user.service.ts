import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminAccountForPut } from './dto/AdminAccountForPut';
import { AdminAccountForResponse } from './dto/AdminAccountForResponse';
import { PaginationAndFilter } from 'src/common/schema/pagination';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async updateAdministratorAccount(
    accountForUpdateAdminRole: AdminAccountForPut,
  ): Promise<AdminAccountForResponse> {
    try {
      return this.prismaService.account.update({
        data: {
          roles: {
            connect: [
              {
                id: accountForUpdateAdminRole.idRoleAdmin,
              },
            ],
          },
        },
        where: {
          id: accountForUpdateAdminRole.idAccount,
        },
        select: {
          id: true,
          roles: true,
        },
      });
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllAccountsService(query: PaginationAndFilter): Promise<object> {
    try {
      const pagination: PaginationAndFilter = {
        limit: query.limit > 0 ? query.limit : 5,
        pageNo: query.pageNo > 0 ? query.pageNo : 1,
      };
      const take = Number(pagination.limit);
      const skip =
        pagination.pageNo <= 1 ? 0 : take * Number(pagination.pageNo - 1);
      const allUsers = await this.prismaService.account.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          phoneNumber: true,
          roles: true,
          created_at: true,
        },
        take: take,
        skip: skip,
        orderBy: {
          created_at: 'desc',
        },
      });
      return {
        data: allUsers,
        pagination: pagination,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
