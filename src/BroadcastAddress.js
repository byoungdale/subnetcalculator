import React from 'react';
var Netmask = require('netmask').Netmask

class BroadcastAddress extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    return <BroadcastAddr broadcast={block.broadcast} />
  }
} // BroadcastAddress

function BroadcastAddr(props) {
  return <h3><b>Broadcast Address: </b>{props.broadcast}</h3>;
} // BroadcastAddr

export default BroadcastAddress;
