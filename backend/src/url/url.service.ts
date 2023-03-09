import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urls as UrlEntity } from 'src/typeorm/Urls';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlEntity)
    private readonly urlRepository: Repository<UrlEntity>,
  ) {}

  addOne(url: string) {
    const newUrl = this.urlRepository.create({ long_url: url });
    return this.urlRepository.save(newUrl);
  }

  retrieveAll() {
    return this.urlRepository.find();
  }

  retrieveById(id: string) {
    console.log(id);
  }
}
