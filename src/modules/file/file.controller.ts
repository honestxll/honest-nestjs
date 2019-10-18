import { Controller, Post, UseInterceptors, UploadedFile, Param, Get, ParseIntPipe, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';

@Controller('files')
export class FileController {
  constructor(
    private fileService: FileService,
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async store(@UploadedFile() data) {
    return await this.fileService.store(data);
  }

  @Get('serve/:id')
  async show(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const file = await this.fileService.show(id);

    res.sendFile(file.filename, {
      root: 'uploads',
      headers: {
        'Content-Type': file.mimetype,
      },
    });
  }
}
