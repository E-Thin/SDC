import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LinkForCreate } from './dto/LinkForCreate';
import { LinkForResponse } from './dto/LinkForResponse';
import { LinkForUpdate } from './dto/LinkForUpdate';

@Injectable()
export class LinkService {
  constructor(private readonly prismaService: PrismaService) {}

  async createLink(linkForCreate: LinkForCreate): Promise<LinkForResponse> {
    try {
      return await this.prismaService.link.create({
        data: {
          name: linkForCreate.name,
          url: linkForCreate.url,
        },
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async getLink(): Promise<LinkForResponse[]> {
    try {
      return await this.prismaService.link.findMany();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async updateLink(id: string, linkForUpdate: LinkForUpdate): Promise<LinkForResponse> {
    try {
      return await this.prismaService.link.update({
        where: {
          id: id,
        },
        data: {
          name: linkForUpdate.name,
          url: linkForUpdate.url,
        },
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteLink(id: string) {
    try {
      return await this.prismaService.link.delete({
        where: {
          id: id,
        },
        select: {
          id: true
        }
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
