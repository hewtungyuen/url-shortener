import { Module } from '@nestjs/common';
import { UrlService } from './url/url.service';
import { UrlModule } from './url/url.module';

@Module({
  imports: [UrlModule],
  controllers: [],
  providers: [UrlService],
})
export class AppModule {}
