import { configure } from 'enzyme';
import localStorageMock from '../__mocks__/localStorageMock';
import Adapter from 'enzyme-adapter-react-16';
import * as numberFormatter from './helpers/numberFormatter';

configure({ adapter: new Adapter() });

process.env.PUBLIC_URL = '';

expect.extend({
  toBeString(received) {
    const isString = typeof received === 'string' || received instanceof String;
    return isString
      ? {
          message: () => `expected ${received} to be string`,
          pass: true
        }
      : {
          message: () => `expected ${received} to be string`,
          pass: false
        };
  }
});

initNumberFormatter();

export function initNumberFormatter() {
  numberFormatter.init({
    locale: 'en-EN',
    getDecimalPlaces: () => ({
      BTC: 1,
      USD: 2
    })
  });
}

global.localStorage = new localStorageMock();
