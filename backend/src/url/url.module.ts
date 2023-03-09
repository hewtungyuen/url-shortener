import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  controllers: [UrlController],
  imports: [UrlModule],
  providers: [UrlService],
})
export class UrlModule {}
