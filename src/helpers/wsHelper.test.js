import { getGateway } from './wsHelper';
import config from '../config';

jest.mock('../config', () => {
  let returnValue = {
    global: {
      gateway: ['api_test1', 'api_test2']
    }
  };

  return {
    setReturnValue: value => {
      returnValue.global.gateway = value;
    },
    ...returnValue
  };
});

describe('wsHelper', () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn()
    };
  });

  it('should return current gateway if config gateway is array and  is include current gateway', () => {
    global.localStorage.getItem = () => 'api_test2';
    const currentGateway = getGateway();

    expect(currentGateway).toEqual('api_test2');
  });

  it('should return first config gateway and set in local storage if config gateway is array and  is not include current gateway', () => {
    global.localStorage.getItem = () => 'api_test3';
    const currentGateway = getGateway();

    expect(global.localStorage.setItem).toHaveBeenCalled();
    expect(currentGateway).toEqual('api_test1');
  });

  it('should return current gateway if config gateway is string and is equal current gateway', () => {
    config.setReturnValue('api_test2');
    global.localStorage.getItem = () => 'api_test2';
    const currentGateway = getGateway();

    expect(currentGateway).toEqual('api_test2');
  });

  it('should return config gateway and set in local storage if config gateway is string and is not equal current gateway', () => {
    config.setReturnValue('api_test1');
    global.localStorage.getItem = () => 'api_test2';
    const currentGateway = getGateway();

    expect(global.localStorage.setItem).toHaveBeenCalled();
    expect(currentGateway).toEqual('api_test1');
  });
});
