import { Injectable } from '@nestjs/common';
import { FilesService } from "../files/files.service";
import { User } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private fileService: FilesService, private prismaService: PrismaService) {
  }
  async uploadAvatar(file: Express.Multer.File, user: User) {
    await this.fileService.uploadPublicFile(file, `${user.id}/avatar`);
    await this.prismaService.user.update({where:{id:user.id}, data:{avatar:`${user.id}/avatar`}})
    const newInfo: User = await this.prismaService.user.findFirst({where:{id:user.id}});
    delete user.hashPass;
    // https://monovrc-bucket.us-east-1.linodeobjects.com/ee328dd2-13a8-408d-a610-8e0c0edd2692-wizzy.png
    return newInfo;
  }
}
