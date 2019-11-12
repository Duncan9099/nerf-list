import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={ (e)=>this.changeUserInput(e.target.value) }
          value={this.state.userInput}
          type="text" />
        <button onClick={ ()=> this.addToList(this.state.userInput)}>press me</button>
        <ul>
          {this.state.list.map((value)=> <li>{value}</li>)}
        </ul>
      </div>
    );
  }

}

export default App;
