import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertion'
})
export class CurrencyConvertionPipe implements PipeTransform {

  transform(value: number): number {
    return value * 7.9;
  }

}
