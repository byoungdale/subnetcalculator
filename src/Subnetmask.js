import React from 'react';
var Netmask = require('netmask').Netmask

class SubNetmask extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    return <SubnetMask mask={block.mask}/>;
  } // render()
} // SubNetmask

function SubnetMask(props) {
  return <h3><b>Subnet Mask: </b>{props.mask}</h3>;
} //SubnetMask

export default SubNetmask;
