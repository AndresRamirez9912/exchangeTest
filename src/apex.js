import { APEX } from 'alphapoint';

const apex = { connection: {}, gateway: '' };

export const setGateway = gateway => {
  apex.gateway = gateway;
};

export const initApex = (onopen, onclose) => {
  const gateway = apex.gateway;
  apex.connection = new APEX(gateway, {
    onopen,
    onclose
  });
  apex.connection.standardCallback = () => {};
};
export default apex;
