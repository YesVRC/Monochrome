import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { AuthService } from "../auth.service";
import { Request, Response } from "express";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class JwtRefreshGuard implements CanActivate {
  constructor(private authService: AuthService, private prismaService: PrismaService) {}
  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    const match = await this.prismaService.refreshTokens.findFirst({where: {token: request.cookies['Refresh']}})
    if(match){
      const at = await this.authService.createAuthToken(match.userId)
      const res: Response = context.switchToHttp().getResponse()
      res.set('Set-Cookie', at)
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

}