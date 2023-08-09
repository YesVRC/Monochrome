import multer, {diskStorage} from "multer";
import {v4 as uuidv4} from 'uuid';
import e from "express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

type ValidFileType = 'jpg' | 'png' | 'jpeg';
type ValidMimeType = 'image/jpg' | 'image/png' | 'image/jpeg';

const ValidFileTypes: ValidFileType[] = ['jpg', 'png', 'jpeg'];
const ValidMimeTypes: ValidMimeType[] = ['image/jpg', 'image/png', 'image/jpeg'];

export function SaveImageToStorage(dest: string, fileName: string = ''): MulterOptions{
  const options: MulterOptions = {
    storage: diskStorage({
      destination: dest,
      filename(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
        callback(null, fileName? fileName : file.originalname);
      },
    }),
    fileFilter(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null), acceptFile: boolean) => void) {
      callback(null, true);
    }
  }
  return options;
}
