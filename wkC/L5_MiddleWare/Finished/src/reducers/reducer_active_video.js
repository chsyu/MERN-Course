import { VIDEO_SELECTED } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  case VIDEO_SELECTED:
    return action.payload;
  }

  return state;
}
