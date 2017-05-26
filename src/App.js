import React, { Component } from 'react';
import Formsy from 'formsy-react';
import logo from './logo.svg';
import './App.css';
import MyInput from './Input.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Subnet Calculator</h2>
        </div>
        <Formsy.Form onSubmit={this.DisplayInfo} className="custom-validation">
          <MyInput
            name="ipaddress"
            title="IP Address"
            type="text"
            value="192.168.0.0/24"
            />
        </Formsy.Form>
      </div>
    ); // return
  } // render()
} // App

export default App;
