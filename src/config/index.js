import configDefault from './configDefault.json';

const config = {};
const configLocal = window.APEXWebConfig || {};
// Reliably confirms that x is an Object, but not a Function, Array, etc.
const isObject = x => Object.prototype.toString.call(x) === '[object Object]';
for (const key in configDefault) {
  if (isObject(configDefault[key]) && isObject(configLocal[key])) {
    config[key] = { ...configDefault[key], ...configLocal[key] };
  } else {
    config[key] = configDefault[key];
  }
}

const { chart: localChart, ...localConfig } =
  JSON.parse(localStorage.getItem('apexTemplate')) || {};

export const assignConfigWithLocal = () => {
  config.global = {
    ...config.global,
    ...localConfig
  };

  config.TradingLayout.chart = localChart || config.TradingLayout.chart;
};

assignConfigWithLocal();

export default config;
