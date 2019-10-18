import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  constructor(
    private fileService: FileService
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async store(@UploadedFile() data) {
    return await this.fileService.store(data);
  }
}
