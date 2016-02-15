import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(
    <HelloWorld />
  , document.querySelector('.container'));
