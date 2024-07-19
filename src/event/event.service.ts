import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventForCreate } from './dto/EventForCreate';
import { EventForResponse } from './dto/EventForResponse';
import { AccountForToken } from 'src/auth/dto/AccountForToken';
import { connect } from 'http2';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  async getEvent(): Promise<EventForResponse[]> {
    try {
      return this.prismaService.event.findMany({
        select: {
          id: true,
          title: true,
          content: true,
          created_at: true,
          updated_at: true,
        },
      });
    } catch (error) {}
  }

  async getEventById(id: string): Promise<EventForResponse> {
    return this.prismaService.event.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async addEvent(eventForCreate: EventForCreate,
    account: AccountForToken,
  ): Promise<EventForResponse> {
    return this.prismaService.event.create({
      data: {
        title: eventForCreate.title,
        content: eventForCreate.content,
        accountId: account.id,
      },
      select: {
        id: true,
        accountId: true,
        title: true,
        content: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async updateEvent(updateEvent: EventForCreate, id: string) {
    return this.prismaService.event.update({
      where: {
        id: id,
      },
      data: {
        title: updateEvent.title,
        content: updateEvent.content,
      },
    });
  }

  async deleteEvent(id: string) {
    return this.prismaService.event.delete({
      where: {
        id: id,
      },
    });
  }
}
