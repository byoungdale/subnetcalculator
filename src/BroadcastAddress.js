import React from 'react';
var Netmask = require('netmask').Netmask

class BroadcastAddress extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("Broadcast Address is" + block.broadcast);
    return <BroadcastAddr broadcast={block.broadcast} />
  }
}

function BroadcastAddr(props) {
  return <h3><b>Broadcast Address: </b>{props.broadcast}</h3>;
}

export default BroadcastAddress;
