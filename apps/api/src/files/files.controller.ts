import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FilesService } from "./files.service";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { SaveImageToStorage } from "./utils/fileUpload.util";
import e from "express";

@Controller('files')
export class FilesController {
  constructor(private fileService: FilesService) {
  }
//  @Get('one/:name(*)')
  async GetFileURLByName(@Param('name') name: string){
    return await this.fileService.GetFileURLByName(name);
  }

//  @Get('all/:name(*)')
  async GetFilesByDir(@Res({ passthrough: false }) res: e.Response, @Param('name') name: string){
    await this.fileService.GetFilesByDir(res, name);
  }

//  @Post('upload')
  @UseInterceptors(FileInterceptor('file', SaveImageToStorage('./files/temp')))
  async UploadFile(@UploadedFile() file: Express.Multer.File, @Req() req){
    return await this.fileService.uploadPublicFile(file, req.body?.path);
  }

  @Get('posters')
  async GetPosters(@Res() res: e.Response){
    await this.fileService.GetFilesByDir(res, 'posters/');
  }


}
