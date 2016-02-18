import React from 'react';

const VideoListItem = (props) => {
  return <li>{props.video.snippet.title}</li>
}

export default VideoListItem;
