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
      try {
        await this.urlService.addOne(url);
        return `Successfully added ${url}`;
      } catch {
        throw new HttpException('Server error', 500);
      }
    } else {
      throw new HttpException('Invalid URL', 400);
    }
  }

  @Get()
  retrieveAll() {
    try {
      return this.urlService.retrieveAll();
    } catch {
      throw new HttpException('Server error', 500);
    }
  }

  @Get(':id')
  retrieveLongUrlById(@Param('id') id: string, @Res() res: Response) {
    try {
      this.urlService.retrieveLongUrlById(id).then((data) => {
        return res.redirect(`${data}`);
      });
    } catch {
      throw new HttpException('Server error', 500);
    }
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    try {
      await this.urlService.deleteById(id);
      return `Successfully deleted ${id}`;
    } catch {
      throw new HttpException('Server error', 500);
    }
  }
}
