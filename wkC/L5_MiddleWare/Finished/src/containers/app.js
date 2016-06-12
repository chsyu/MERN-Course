import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { videoSelect, videoSearch } from '../actions/index';
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.videoSearch('ntue dtd');
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.props.videoSearch} />
        <VideoDetail video={this.props.selectedVideo} />
        <VideoList
          onVideoSelect={this.props.videoSelect}
          videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state.selectedVideo){
    return {
      videos: state.videos,
      selectedVideo: state.videos[0]
    };
  }
  else {
    return {
      videos: state.videos,
      selectedVideo: state.selectedVideo
    };
  }
}

export default connect(mapStateToProps, {videoSelect, videoSearch})(App);
