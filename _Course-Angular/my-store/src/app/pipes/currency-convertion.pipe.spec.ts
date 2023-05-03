import { CurrencyConvertionPipe } from './currency-convertion.pipe';

describe('CurrencyConvertionPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConvertionPipe();
    expect(pipe).toBeTruthy();
  });
});
