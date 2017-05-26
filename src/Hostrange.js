import React from 'react';
var Netmask = require('netmask').Netmask

class Range extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    return (
      <div>
        <IpRange first={block.first} last={block.last} />
        <HostTotal total={block.size}/>
      </div>
    ) // return
  } // render()
} // Range

function IpRange(props) {
  return <h3><b>Host Range: </b>{props.first}-{props.last}</h3>;
} // IpRange

function HostTotal(props) {
  return <h3><b>Total Host Addresses:</b> {props.total}</h3>
} // HostTotal

export default Range;
