import BigNumber from 'bignumber.js';
import numeral from 'numeral';
import 'numeral/locales';
import parseDecimalNumber from 'parse-decimal-number';

const makeBigNumber = value => new BigNumber(isNaN(value) ? 0 : value);

class NumberFormatter {
  constructor() {
    this.locale = null;
    this.abbreviations = null;
    this.delimiters = null;
    this.getDecimalPlaces = null;
  }

  /**
   * @param {Object} options
   * @param {String} options.locale
   * @param {Function} options.getDecimalPlaces
   */
  init(options) {
    this.locale = options.locale;
    this.getDecimalPlaces = options.getDecimalPlaces;

    const { delimiters, abbreviations } = this.getLocaleSettings();

    this.abbreviations = abbreviations;
    this.delimiters = delimiters;

    BigNumber.config({
      ROUNDING_MODE: BigNumber.ROUND_FLOOR,
      FORMAT: {
        decimalSeparator: delimiters.decimal,
        groupSeparator: delimiters.thousands,
        groupSize: 3
      }
    });
  }

  currency(value, symbol) {
    const currency = makeBigNumber(value);
    currency.symbol = symbol;
    return currency;
  }

  formatPercentageValue(value) {
    const number = makeBigNumber(value);
    return `${number.toFormat(2)}%`;
  }

  formatToThousands(value) {
    const number = makeBigNumber(value);
    return `${number.div(1000).toFormat(2)}${this.abbreviations.thousand}`;
  }

  /**
   *
   * @param {string|number|BigNumber} value
   * @param {string|number} symbolOrDecimals
   */
  formatNumberToLocale(value, symbolOrDecimals) {
    const num = makeBigNumber(value);
    let decimals;

    if (typeof symbolOrDecimals === 'string' && this.getDecimalPlaces != null) {
      const decimalPlaces = this.getDecimalPlaces();
      decimals = decimalPlaces[symbolOrDecimals];
    } else {
      decimals = symbolOrDecimals;
    }

    return num.toFormat(decimals);
  }

  parseNumberToLocale(value, localeOverride, negativeIsNaN = true) {
    const settings = this.getLocaleSettings(localeOverride);
    const reg = new RegExp(`\\${settings.delimiters.thousands}`, 'g');
    const formatValue = value.toString().replace(reg, '');
    if (formatValue === '' || formatValue === settings.delimiters.decimal)
      return 0;
    const parsed = parseDecimalNumber(formatValue, settings.delimiters);
    return negativeIsNaN && parsed < 0 ? NaN : parsed;
  }

  replaceZeroWithDash(value) {
    return value === 0 ? '-' : value;
  }

  truncateToDecimals(value, decimalPlaces, roundingMode = null) {
    const number = makeBigNumber(value);
    return number.decimalPlaces(decimalPlaces, roundingMode);
  }

  getParsedDecimal(value, decimalPlaces, localeOverride = null) {
    // returns an object useful for complex rendering of decimal values
    const { thousands, decimal } = localeOverride
      ? this.getLocaleSettings(localeOverride).delimiters
      : this.delimiters;
    const BN = localeOverride
      ? BigNumber.clone({
          FORMAT: {
            decimalSeparator: decimal,
            groupSeparator: thousands,
            groupSize: 3
          }
        })
      : BigNumber;
    const bigNum = new BN(isNaN(value) ? 0 : value);
    const parts = bigNum.toFormat().split(decimal);
    const units = parts[0];
    let decimals = parts.length > 1 && parts[1].length ? parts[1] : '0';
    if (decimals.length > decimalPlaces) {
      // concat
      decimals = decimals.substr(0, decimalPlaces);
    }
    const padding =
      decimals.length < decimalPlaces
        ? '0'.repeat(decimalPlaces - decimals.length)
        : '';

    return {
      negative: bigNum.isNegative(),
      units: units,
      decimalSeparator: decimal,
      decimals: decimals,
      padding: padding
    };
  }

  getLocaleSettings(localeOverride = null) {
    const localeCode = localeOverride || this.locale;
    let settings;
    try {
      // numberal keys for locales can be without country code (e.g "en")
      settings = numeral.localeData(localeCode);
    } catch (e) {
      try {
        settings = numeral.localeData(localeCode.split('-')[0]);
      } catch (e) {
        // there can be the case that numeral doesn't have key for only lang code (e.g for pt key is pt-pt)
        settings = numeral.localeData(`${localeCode}-${localeCode}`);
      }
    }
    return settings;
  }
}

const numberFormatter = new NumberFormatter();

export const init = numberFormatter.init.bind(numberFormatter);
export const currency = numberFormatter.currency.bind(numberFormatter);
export const formatPercentageValue = numberFormatter.formatPercentageValue.bind(
  numberFormatter
);
export const formatToThousands = numberFormatter.formatToThousands.bind(
  numberFormatter
);
export const formatNumberToLocale = numberFormatter.formatNumberToLocale.bind(
  numberFormatter
);
export const parseNumberToLocale = numberFormatter.parseNumberToLocale.bind(
  numberFormatter
);
export const replaceZeroWithDash = numberFormatter.replaceZeroWithDash.bind(
  numberFormatter
);
export const truncateToDecimals = numberFormatter.truncateToDecimals.bind(
  numberFormatter
);
export const getParsedDecimal = numberFormatter.getParsedDecimal.bind(
  numberFormatter
);
export const getLocaleSettings = numberFormatter.getLocaleSettings.bind(
  numberFormatter
);
