import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  it('should return a fixed dollar value (mocked)', async () => {
    // 1️⃣ Creamos un mock de getDollarValue para devolver un valor fijo
    jest.spyOn(service, 'getDollarValue').mockResolvedValue(500);

    const result = await service.getDollarValue();
    expect(result).toBe(500); // 2️⃣ Verificamos que devuelva el valor mockeado
  });

  it('should calculate dollar equivalent from colones', async () => {
    // 1️⃣ Mockeamos getDollarValue para devolver 500
    jest.spyOn(service, 'getDollarValue').mockResolvedValue(500);

    const result = await service.getDollarEquivalent(10000); // 10000 colones
    expect(result).toBe(20); // 2️⃣ 10000 / 500 = 20
  });
});
