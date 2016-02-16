import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyBEecjE_v8D5bC5nrfS3Xm-heojWG26L0w';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.querySelector('.container'));
