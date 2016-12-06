import React from 'react';
var Netmask = require('netmask').Netmask

class SubNetmask extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("Subnet Mask is " + block.mask);
    return <SubnetMask mask={block.mask}/>;
  }
}

function SubnetMask(props) {
  return <h3><b>Subnet Mask: </b>{props.mask}</h3>;
}

export default SubNetmask;
