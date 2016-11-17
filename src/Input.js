import React from 'react';
import Formsy from 'formsy-react';
var Netmask = require('netmask').Netmask

class SubNetmask extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("Subnet Mask is " + block.mask);
    return <SubnetMask mask={block.mask}/>;
  }
}

class Base extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("CIDR bitmask is " + block.bitmask);
    return <IPbase ipaddress={block.base} bitmask={block.bitmask}/>;
  }
}

class BroadcastAddress extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("Broadcast Address is" + block.broadcast);
    return <BroadcastAddr broadcast={block.broadcast} />
  }
}

class Range extends React.Component {
  render() {
    var block = new Netmask(this.props.ipaddress);
    console.log("IP address range is " + block.first + "-" + block.last);
    return (
      <div>
        <IpRange first={block.first} last={block.last} />
        <HostTotal total={block.size}/>
      </div>
    )
  }
}

function SubnetMask(props) {
  return <h3><b>Subnet Mask: </b>{props.mask}</h3>;
}

function IPbase(props) {
  return <h3><b>IP Address: </b>{props.ipaddress} /{props.bitmask}</h3>;
}

function BroadcastAddr(props) {
  return <h3><b>Broadcast Address: </b>{props.broadcast}</h3>;
}

function IpRange(props) {
  return <h3><b>Host Range: </b>{props.first}-{props.last}</h3>;
}

function HostTotal(props) {
  return <h3><b>Total Host Addresses:</b> {props.total}</h3>
}

const MyInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {

    const className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
        />
        <span className='validation-error'>{errorMessage}</span>
        <Base ipaddress={this.getValue()} />
        <SubNetmask ipaddress={this.getValue()} />
        <BroadcastAddress ipaddress={this.getValue()} />
        <Range ipaddress={this.getValue()} />
      </div>
    );
  }
});

export default MyInput;
