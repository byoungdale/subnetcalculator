const Netmask = require('netmask').Netmask

const isValidIP = (value) => {
  try {
    new Netmask(value);
    return true;
  } catch(err) {
    return false;
  }
} // isValidIP

export default isValidIP;
