import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlService {
  addOne(url: string) {
    console.log(url);
  }

  retrieveAll() {
    console.log('retrieveAll');
  }

  retrieveById(id: string) {
    console.log(id);
  }
}
