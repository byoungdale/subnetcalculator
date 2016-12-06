import React from 'react';
var Netmask = require('netmask').Netmask

class Base extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("CIDR bitmask is " + block.bitmask);
    return <IPbase ipaddress={block.base} bitmask={block.bitmask}/>;
  }
}

function IPbase(props) {
  return <h3><b>IP Address: </b>{props.ipaddress} /{props.bitmask}</h3>;
}

export default Base;
