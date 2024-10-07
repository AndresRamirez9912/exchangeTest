import config from '../config';

export const getGateway = () => {
  const configGateway = config.global.gateway;
  const currentGateway = localStorage.getItem('tradingServer');

  if (Array.isArray(configGateway)) {
    if (currentGateway && configGateway.includes(currentGateway)) {
      return currentGateway;
    } else {
      localStorage.setItem('tradingServer', configGateway[0]);
      return configGateway[0];
    }
  } else {
    if (currentGateway !== configGateway) {
      localStorage.setItem('tradingServer', configGateway);
      return configGateway;
    } else {
      return currentGateway;
    }
  }
};
