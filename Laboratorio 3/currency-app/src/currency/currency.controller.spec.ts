import { CurrencyController } from './currency.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CurrencyModule } from './currency.module';

describe('CurrencyController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CurrencyModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true })); // Pipe global de validación
    await app.init();
  });

  it('should return 400 if amount is not a number', async () => {
    const response = await request(app.getHttpServer()).get('/dollarEquivalent/notanumber');
    expect(response.status).toBe(400);
    expect(response.body.message).toContain('Validation failed');
  });

  afterAll(async () => {
    await app.close();
  });
});

describe('CurrencyController', () => {
  let controller: CurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyController],
    }).compile();

    controller = module.get<CurrencyController>(CurrencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
