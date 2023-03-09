import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post(':url')
  addOne(@Param('url') url: string) {
    this.urlService.addOne(url);
  }

  @Get()
  retrieveAll() {
    return this.urlService.retrieveAll();
  }

  @Get('getLongUrl/:id')
  retrieveLongUrlById(@Param('id') id: string) {
    return this.urlService.retrieveLongUrlById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.urlService.deleteById(id);
  }
}
