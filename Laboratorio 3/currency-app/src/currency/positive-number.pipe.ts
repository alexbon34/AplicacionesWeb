// src/currency/positive-number.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveNumberPipe implements PipeTransform {
  transform(value: string): number {
    const number = Number(value);

    if (isNaN(number) || number <= 0) {
      throw new BadRequestException('El monto debe ser un número positivo');
    }

    return number;
  }
}
