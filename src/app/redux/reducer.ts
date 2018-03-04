import { Action } from 'redux';
import { PostActions } from './post.actions';
//console.log(actions)
export interface IAppState {
  posts: any[],
}

export const INITIAL_STATE: IAppState = {
  posts: []
};

export default function reducer(state = {
  posts: []
}, action) {
  switch (action.type) {
    case PostActions.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
  }
}
