import {Injectable} from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import e from "express";
import {InjectMinioClient, MinioClient} from "@svtslv/nestjs-minio";
import * as fs from 'node:fs/promises'

@Injectable()
export class FilesService {
  constructor(private configService: ConfigService, @InjectMinioClient() private readonly minioClient: MinioClient) {
  }

  async uploadPublicFile(file: Express.Multer.File, id: string){
    const ext = file.filename.split('.')[file.filename.split('.').length - 1];
    const mime = `${file.mimetype.split('/')[0]}/${ext}`;
    const res = await this.minioClient.fPutObject('monovrc', (id + file.originalname).replace(' ', '_'), file.path, {"Content-Type": mime});
    await fs.rm(`./files/temp/${file.filename}`);
    return res;
  }

  async GetFileURLByName(name: string) {
    return `http://content.monovrc.com/monovrc/${name}`;
  }

  async GetFilesByDir(res: e.Response, name: string) {
    const data:string[] = [];
    const path = name.endsWith('/')? name : name + '/';
    const files = this.minioClient.listObjectsV2('monovrc', path, false);
    files.on('error', function () {res.send({message: 'Error'})});
    files.on('data', function (obj) { data.push(`http://content.monovrc.com/monovrc/${obj['name']}`)});
    files.on('end', function (obj) {
      console.log(data);
      res.status(200).json({urls: data});
    });
  }
}
