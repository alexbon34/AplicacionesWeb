// src/currency/currency.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { PositiveNumberPipe } from './positive-number.pipe';

@Controller('dollarEquivalent')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get(':amount')
  async getDollarEquivalent(
    @Param('amount', PositiveNumberPipe) amount: number,
  ): Promise<{ colones: number; dollarEquivalent: number }> {
    const dollar = await this.currencyService.getDollarEquivalent(amount);
    return {
      colones: amount,
      dollarEquivalent: dollar,
    };
  }
}
