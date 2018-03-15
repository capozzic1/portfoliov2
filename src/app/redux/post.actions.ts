import { Action } from '@ngrx/store';

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
import { State } from './reducer';

export class GetPostsAction implements Action {
  readonly type = GET_POSTS;
  constructor() {

  }
}

export class GetPostsSuccessAction implements Action {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public payload: any[]) { }
}

export type Actions
  = GetPostsAction
  | GetPostsSuccessAction;
