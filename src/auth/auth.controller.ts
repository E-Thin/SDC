import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountForPost } from './dto/AccountForPost';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() accountForPost: AccountForPost) {
    console.log('step1: loading to create account...');
    return this.authService.register(accountForPost);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    console.log(req?.user);
    console.log('loading to login...');
    return await this.authService.login(req?.user);
  }
}
