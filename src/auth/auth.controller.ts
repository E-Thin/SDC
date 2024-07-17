import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { Action } from 'src/casl/casl-ability.factory/casl-ability.factory';
  import { CheckAbilities } from 'src/decorator/abilities.decorator';
  import { AuthService } from './auth.service';
  import { AccountForPost } from './dto/AccountForPost';
  import { AccountForToken } from './dto/AccountForToken';
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

    @Get('/profile')
    // define permision which user can do in this API
    @CheckAbilities({ action: Action.Read, subject: AccountForToken })
    // check permision of account in request and permission in API
    async getProfile(@Request() req) {
      return await this.authService.getProfileAccount(req?.user);
    }
  }
  