import axios from 'axios';

const API_KEY = 'AIzaSyBEecjE_v8D5bC5nrfS3Xm-heojWG26L0w';
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const VIDEO_SELECTED = 'VIDEO_SELECTED';
export const VIDEO_SEARCH = 'VIDEO_SEARCH';


export function videoSelect(video) {
  return {
    type: VIDEO_SELECTED,
    payload: video
  };
}

export function videoSearch(term) {
  var params = {
  part: 'snippet',
  key: API_KEY,
  q: term,
  type: 'video'
};

  const request = axios.get(ROOT_URL, { params: params });

  return {
    type: VIDEO_SEARCH,
    payload: request
  };
}
