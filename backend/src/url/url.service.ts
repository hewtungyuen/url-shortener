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
    return this.urlRepository.find({
      order: {
        date: 'DESC',
      },
    });
  }

  async retrieveLongUrlById(input: string) {
    return this.urlRepository
      .findOneBy({ id: input })
      .then((data) => data.long_url);
  }

  deleteById(id: string) {
    this.urlRepository.delete({ id: id });
  }

  checkUrlValidity(s: string) {
    let url;

    try {
      url = new URL(s);
    } catch {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  }
}
