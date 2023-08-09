import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FilesModule } from "../files/files.module";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [FilesModule, PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
