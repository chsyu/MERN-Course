import React from 'react';

const VideoListItem = (props) => {
  return <li>{props.video.snippet.description}</li>
}

export default VideoListItem;
