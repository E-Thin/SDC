import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SessionAccountFull {
  refreshToken: string;
  accessToken: string;
  isExpire: boolean;
}
