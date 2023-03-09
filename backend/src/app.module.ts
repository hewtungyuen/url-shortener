import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urls } from './typeorm/Urls';
import { UrlModule } from './url/url.module';
require('dotenv').config();

@Module({
  imports: [
    UrlModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Urls],
      synchronize: process.env.TYPEORM_SYNC === 'true',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
