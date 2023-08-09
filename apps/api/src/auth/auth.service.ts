import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LocalLoginDto } from './dto/localLogin.dto';
import { RegisterUserLocalDto } from './dto/registerUserLocal.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from "@prisma/client";
import { Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import {UserRequest} from '../types/UserRequest';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService, private jwtService: JwtService, private configService: ConfigService) {}
  async createAuthToken(userId: string): Promise<string> {
    const token = await this.jwtService.signAsync({userId: userId}, {secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'), expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')})
    return Promise.resolve(`Authentication=Bearer ${token}; Path=/; Max-Age=${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}`);
  }
  async createRefreshToken(userId: string): Promise<string> {
    const token = await this.jwtService.signAsync({userId: userId}, {secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'), expiresIn: this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')})
    return Promise.resolve(`Refresh=${token}; Path=/; Max-Age=${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`);
  }

  async genTokens(userId: string, res: Response): Promise<void>{
    const at = await this.createAuthToken(userId)
    const rt = await this.createRefreshToken(userId)
    res.set('Set-Cookie', [at, rt])
  }
  async loginLocal(data: LocalLoginDto, request: UserRequest) {
    return Promise.resolve(request.user)
  }

  async registerLocal(data: RegisterUserLocalDto, request: UserRequest) {
    const exists = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { username: { equals: data.username, mode: 'insensitive' } },
          { email: { equals: data.email, mode: 'insensitive' } },
        ],
      },
    });
    if (exists)
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);

    const user: User = await this.prismaService.user.create({
      data: {
        username: data.username,
        email: data.email,
        hashPass: await bcrypt.hash(data.password, 10)
      }
    })

    await this.genTokens(user.id, request.res)
    delete user.hashPass
    return Promise.resolve(user)
  }


  async loginDiscord() {
    return this.configService.get('DISCORD_OAUTH_LOGIN_URL');
  }

  async linkDiscord(code: string, req: UserRequest) {

    try{
      const optionsPost = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
          client_id: this.configService.get('DISCORD_CLIENT_ID'),
          client_secret: this.configService.get('DISCORD_CLIENT_SECRET'),
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'http://localhost:3000/api/auth/link/discord',
          scope: 'identify'
        })
      };
      const tokens = await fetch('https://discord.com/api/oauth2/token', optionsPost)
      const jsonTokens = await tokens.json()

      const optionsGet = {
        method: 'GET',
        headers: {Authorization: `Bearer ${jsonTokens['access_token']}`}
      };
      const res = await fetch('https://discord.com/api/oauth2/@me', optionsGet)
      const jsonRes = await res.json()

      const exists = await this.prismaService.user.findFirst({where: {discordId: jsonRes['user']['id']}})
      if(exists){
        throw new HttpException('Discord is already linked.', HttpStatus.UNAUTHORIZED)
      }
      const changed = this.prismaService.user.update({where: {id: req.user.id}, data: {discordId: jsonRes['user']['id']}})
      return changed;
    }
    catch (e: HttpException | any) {
      throw e;
    }

  }
}
