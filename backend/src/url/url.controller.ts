import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Res,
  Body,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  addOne(@Body('url') url: string) {
    this.urlService.addOne(url);
  }

  @Get()
  retrieveAll() {
    return this.urlService.retrieveAll();
  }

  @Get(':id')
  retrieveLongUrlById(@Param('id') id: string, @Res() res: Response) {
    this.urlService.retrieveLongUrlById(id).then((data) => {
      return res.redirect(`${data}`);
    });
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.urlService.deleteById(id);
  }
}
