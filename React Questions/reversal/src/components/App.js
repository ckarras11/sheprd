import React, { Component } from 'react';
import './App.css';
import Form from './input';
import Display from './display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput (e) {
    this.setState({
      input: e.target.value 
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>String Reversal</h1>
        <Form onChange={this.handleInput}/>
        <Display userInput={this.state.input}/>
      </div>
    );
  }
}

export default App;
