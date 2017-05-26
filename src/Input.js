import React from 'react';
import Formsy from 'formsy-react';
import isValidIP from './Errors';
import Base from './CIDR.js';
import SubNetmask from './Subnetmask.js';
import BroadcastAddress from './BroadcastAddress.js';
import Range from './Hostrange.js';

const createReactClass = require('create-react-class');

class FinalResult extends React.Component {
  render() {
    return (
      <div>
        <Base ipaddress={this.props.ipaddress} />
        <SubNetmask ipaddress={this.props.ipaddress} />
        <BroadcastAddress ipaddress={this.props.ipaddress} />
        <Range ipaddress={this.props.ipaddress} />
      </div>
    ) // return
  } // render()
} // FinalResult

const MyInput = createReactClass({

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

    if (!isValidIP(this.getValue())) {

      return(
        <div className={className}>
          <label htmlFor={this.props.name}>{this.props.title}</label>
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            onChange={this.changeValue}
            value={this.getValue()}
          />
        <p><font color="red">Please enter a valid ipv4 address</font></p>
        </div>
      );
    } // if (!isValidIP(this.getValue()))

    // return is input is valid ipv4 address
    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
        />
        <FinalResult
          name="ipaddress"
          ipaddress={this.getValue()}
          required
        />
      </div>
    ); // return
  } // render()
}); // MyInput

export default MyInput;
