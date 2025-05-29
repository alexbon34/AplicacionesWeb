// src/currency/currency.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule implements OnModuleInit {
  constructor(private readonly currencyService: CurrencyService) {}

  async onModuleInit() {
    await this.currencyService.getDollarValue();
  }
}
