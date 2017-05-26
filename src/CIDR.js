import React from 'react';
const Netmask = require('netmask').Netmask

class Base extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    return <IPbase
      ipaddress={block.base}
      bitmask={block.bitmask}
      />;
  } // render()
} // Base

function IPbase(props) {
  return <h3><b>IP Address: </b>{props.ipaddress} /{props.bitmask}</h3>;
} // IPbase

export default Base;
