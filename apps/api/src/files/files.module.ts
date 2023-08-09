import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import { AuthModule } from "../auth/auth.module";
import { FilesController } from './files.controller';
import {MinioModule} from "@svtslv/nestjs-minio";

@Module({
  imports: [
    MinioModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        config: {
          // url: 'http://minio:password@localhost:9000',
          accessKey: configService.get('MINIO_ACCESS_KEY'),
          secretKey: configService.get('MINIO_SECRET_KEY'),
          endPoint: configService.get('MINIO_ENDPOINT'),
          useSSL: true,
        },
      }),
      inject: [ConfigService]
    }),
],
  providers: [FilesService],
  exports: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
