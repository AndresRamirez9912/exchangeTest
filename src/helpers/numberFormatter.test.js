import {
  parseNumberToLocale,
  formatNumberToLocale,
  replaceZeroWithDash,
  truncateToDecimals,
  getParsedDecimal,
  currency,
  formatPercentageValue,
  formatToThousands,
  getLocaleSettings
} from './numberFormatter';
import { initNumberFormatter } from '../setupTests';

import BigNumber from 'bignumber.js';

describe('numberFormatter', () => {
  afterAll(() => {
    // number formatter init once for all tests, that's why after testing of numberFormatter we init it again for all rest tests
    initNumberFormatter();
  });

  describe('parseNumberToLocale', () => {
    it('should parse correct number value', () => {
      const result = parseNumberToLocale('1.10', 'en-US');

      expect(result).toEqual(1.1);
    });

    it('should parse number value with custom locale', () => {
      const result = parseNumberToLocale('1.100,10', 'pt-BR');

      expect(result).toEqual(1100.1);
    });

    it('should return NaN for non-number value', () => {
      const result = parseNumberToLocale('string', 'en-US');

      expect(result).toEqual(NaN);
    });

    it('should return NaN for negative numbers if negativeIsNaN specefied', () => {
      const result = parseNumberToLocale('-12.2', 'en-US', true);

      expect(result).toEqual(NaN);
    });

    it('should return 0 if value is equal to empty string', () => {
      const result = parseNumberToLocale('', 'en-US');

      expect(result).toEqual(0);
    });
  });

  describe('formatNumberToLocale', () => {
    it('should round value down', () => {
      const result = formatNumberToLocale(10.999, 2);

      expect(result).toBe('10.99');
    });
  });

  describe('getLocaleSettings', () => {
    it('should return correct locale if numeral doesn`t have key for only lang code', () => {
      const result = getLocaleSettings('pt');

      expect(result).toBeInstanceOf(Object);
    });
  });

  describe('replaceZeroWithDash', () => {
    it('should return a dash when value is 0', () => {
      expect(replaceZeroWithDash(0)).toBe('-');
    });

    it('should return original value if value is not 0', () => {
      expect(replaceZeroWithDash(1)).toBe(1);
      expect(replaceZeroWithDash(34)).toBe(34);
      expect(replaceZeroWithDash(78)).toBe(78);
      expect(replaceZeroWithDash(3.53166)).toBe(3.53166);
    });
  });

  describe('truncateToDecimals', () => {
    it('should round value down', () => {
      const result = truncateToDecimals(5.959, 2);

      expect(result.toNumber()).toEqual(5.95);
    });

    it('should round negative towards -Infinity', () => {
      const result = truncateToDecimals(-5.05, 0);

      expect(result.toNumber()).toEqual(-6);
    });
  });

  describe('currency', () => {
    it('should return bigNumber with `symbol` property', () => {
      const result = currency(10, 'USD');

      expect(result).toEqual({ ...new BigNumber(10), symbol: 'USD' });
    });
  });

  describe('formatPercentageValue', () => {
    it('should return value in format `xxx.xx%` ', () => {
      const result = formatPercentageValue(10.23412);

      expect(result).toEqual('10.23%');
    });
  });

  describe('formatToThousands', () => {
    it('it should return quantity of thousands in format `xxx.xxk` ', () => {
      const result = formatToThousands(131434);

      expect(result).toEqual('131.43k');
    });
  });
});

describe('.getParsedDecimal helper function', () => {
  const _test = (value, decimals, locale, expectedResult) => {
    // we now know that value will be a BigNumber
    value = value instanceof BigNumber ? value : new BigNumber(value);
    it('correctly parses ' + value + ', ' + decimals, () => {
      const result = getParsedDecimal(value, decimals, locale);
      expect(result).toEqual(expectedResult);
    });
  };

  _test(0, 2, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '0',
    decimals: '0',
    padding: '0'
  });
  _test(0, 5, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '0',
    decimals: '0',
    padding: '0000'
  });

  _test(0.05, 5, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '0',
    decimals: '05',
    padding: '000'
  });
  _test(0.05, 1, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '0',
    decimals: '0',
    padding: ''
  });

  _test(10, 5, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '10',
    decimals: '0',
    padding: '0000'
  });
  _test(10, 1, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '10',
    decimals: '0',
    padding: ''
  });

  _test(10000.05, 5, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '10,000',
    decimals: '05',
    padding: '000'
  });
  _test(10000.05, 1, 'en-US', {
    decimalSeparator: '.',
    negative: false,
    units: '10,000',
    decimals: '0',
    padding: ''
  });

  // negative numbers
  _test(-10000.05, 5, 'en-US', {
    decimalSeparator: '.',
    negative: true,
    units: '-10,000',
    decimals: '05',
    padding: '000'
  });
  _test(-10000.05, 1, 'en-US', {
    decimalSeparator: '.',
    negative: true,
    units: '-10,000',
    decimals: '0',
    padding: ''
  });

  /* BRAZIL */
  _test(0, 2, 'pt-BR', {
    decimalSeparator: ',',
    negative: false,
    units: '0',
    decimals: '0',
    padding: '0'
  });
  _test(10000.05, 5, 'pt-BR', {
    decimalSeparator: ',',
    negative: false,
    units: '10.000',
    decimals: '05',
    padding: '000'
  });
  _test(-10000.05, 1, 'pt-BR', {
    decimalSeparator: ',',
    negative: true,
    units: '-10.000',
    decimals: '0',
    padding: ''
  });
});

describe('.renderParsedDecimal helper function', () => {});
