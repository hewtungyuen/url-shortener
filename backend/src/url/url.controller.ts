import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Res,
  Body,
  HttpException,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async addOne(@Body('url') url: string) {
    const isValid = await this.urlService.checkUrlValidity(url);
    if (isValid) {
      this.urlService.addOne(url);
    } else {
      throw new HttpException('Invalid URL', 400);
    }
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
