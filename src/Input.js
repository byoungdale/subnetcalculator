import React from 'react';
import Formsy from 'formsy-react';
import Base from './CIDR.js';
import SubNetmask from './Subnetmask.js';
import BroadcastAddress from './BroadcastAddress.js';
import Range from './Hostrange.js';

class FinalResult extends React.Component {
  render() {
    return (
      <div>
        <Base ipaddress={this.props.ipaddress} />
        <SubNetmask ipaddress={this.props.ipaddress} />
        <BroadcastAddress ipaddress={this.props.ipaddress} />
        <Range ipaddress={this.props.ipaddress} />
      </div>
    )
  }
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
        <FinalResult ipaddress={this.getValue()} />
      </div>
    );
  }
});

export default MyInput;
