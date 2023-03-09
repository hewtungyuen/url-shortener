import { Controller, Get, Param, Post } from '@nestjs/common';
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
    this.urlService.retrieveAll();
  }

  @Get(':id')
  retrieveById(@Param('id') id: string) {
    this.urlService.retrieveById(id);
  }
}
