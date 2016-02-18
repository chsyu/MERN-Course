import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
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
        <VideoDetail video={this.state.videos[1]} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
