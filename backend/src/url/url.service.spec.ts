import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Urls } from '../typeorm/Urls';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;
  let invalidUrl;
  let validUrl;

  const mockUrlRepository = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlService,
        {
          provide: getRepositoryToken(Urls),
          useValue: { mockUrlRepository },
        },
      ],
    }).compile();

    service = module.get<UrlService>(UrlService);

    invalidUrl = 'www.tech.gov.sg/';
    validUrl = 'https://www.tech.gov.sg/';
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Url validity', () => {
    it('should return false', () => {
      expect(service.checkUrlValidity(invalidUrl)).toBeFalsy;
    });
    it('should return true', () => {
      expect(service.checkUrlValidity(validUrl)).toBeTruthy;
    });
  });
});
