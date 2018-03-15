import { Action } from 'redux';
//import { PostActions } from './post.actions';
//console.log(actions)
import * as posts from './post.actions';

export interface State {
  posts: any
}

export const initialState: State = {
  posts: []

};

export default function reducer(
  state = initialState, action): State {
  switch (action.type) {
    case posts.GET_POSTS_SUCCESS: {
      return action.payload;
    };
    default: {
      return state;
    }
  }

}
