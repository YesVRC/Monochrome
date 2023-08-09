import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post, Req,
  UploadedFile, UseInterceptors,
  UseGuards
} from "@nestjs/common";
import { UserService } from "./user.service";
import { FilesInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "../auth/passport/jwt.guard";
import { Request } from "express";
import {UserRequest} from "../types/UserRequest";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  async getUsers(){
    return 'test';
  }

  @Post('avatar')
  @UseInterceptors(FilesInterceptor('files'))
  @UseGuards(JwtAuthGuard)
  async uploadAvatar(@UploadedFile() files: Express.Multer.File, @Req() req: UserRequest) {
    console.log(req)
    return await this.userService.uploadAvatar(req.files[0], req.user)
  }
}
