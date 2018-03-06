import { Action } from 'redux';
//import { PostActions } from './post.actions';
//console.log(actions)
// import * as posts from './post.actions';

export interface IAppState {

  posts: any

}

export const INITIAL_STATE: IAppState = {
  posts: []

};

export default function reducer(
  state = {
    posts: []
  }, action) {
  switch (action.type) {
    case 'GET_POSTS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
