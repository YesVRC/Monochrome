import { Body, Controller, Get, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
import { RegisterUserLocalDto } from './dto/registerUserLocal.dto';
import { LocalLoginDto } from './dto/localLogin.dto';
import { AuthService } from './auth.service';
import { Request, Response } from "express";
import { DiscordLoginGuard } from "./passport/discord.login.guard";
import { LocalGuard } from "./passport/local.guard";
import { JwtAuthGuard } from "./passport/jwt.guard";
import { JwtRefreshGuard } from "./passport/jwt.refresh.guard";
import {UserRequest} from "../types/UserRequest";

// TODO: Make routes for local login, discord login //
// TODO: Make routes for JWT refresh token //
// TODO: Make guard for logins and JWT access token //

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register/local')
  async registerLocal(@Body() data: RegisterUserLocalDto, @Req() req: UserRequest) {
    return await this.authService.registerLocal(data, req);
  }
  @Post('/login/local')
  @UseGuards(LocalGuard)
  async loginLocal(@Body() data: LocalLoginDto, @Req() req: UserRequest) {
    return await this.authService.loginLocal(data, req);
  }

  @Get('/login/discord')
  async loginDiscord(){
    return await this.authService.loginDiscord();
  }

  @Get('/login/discord/redirect')
  @UseGuards(DiscordLoginGuard)
  async loginDiscordRedirect(@Req() req: UserRequest){
    return req.user;
  }
  @Get('/link/discord')
  @UseGuards(JwtAuthGuard)
  async discordLink(@Query('code') code: string, @Req() req: UserRequest){
    return await this.authService.linkDiscord(code, req)
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  async refreshJwt(){
    return 'Token Refreshed';
  }


}
