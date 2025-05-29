// src/currency/currency.service.ts
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
  private dollarValue: number | null = null;
  private readonly logger = new Logger(CurrencyService.name);

  async getDollarValue(): Promise<number> {
    if (this.dollarValue !== null) {
      return this.dollarValue as number;
    }

    try {
      const response = await axios.get('https://api.hacienda.go.cr/indicadores/tc');
      //console.log('Respuesta del API Hacienda:', response.data);
      this.dollarValue = response.data.dolar.venta.valor;  // Valor de venta
      this.logger.log(`Valor del dólar actualizado: ${this.dollarValue}`);
      return this.dollarValue as number;
    } catch (error) {
      this.logger.error('Error al obtener el valor del dólar', error);
      throw error;
    }
  }

  async getDollarEquivalent(colones: number): Promise<number> {
    const dollar = await this.getDollarValue();
    return +(colones / dollar).toFixed(2);
  }
}
