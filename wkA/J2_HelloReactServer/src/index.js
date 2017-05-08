import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Hello again ... </h2>
      </div>
    );
  }
}

ReactDOM.render(
    <HelloWorld />
  , document.querySelector('.container'));
