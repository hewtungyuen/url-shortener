import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urls } from '../typeorm/Urls';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  controllers: [UrlController],
  imports: [TypeOrmModule.forFeature([Urls])],
  providers: [UrlService],
})
export class UrlModule {}
