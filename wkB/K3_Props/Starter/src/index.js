import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js'
const API_KEY = 'AIzaSyBEecjE_v8D5bC5nrfS3Xm-heojWG26L0w';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'ntue dtd'}, videos => this.setState({videos}));
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
