import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import * as Redux from 'redux';
import { IAppState } from './reducer';
import { PostService } from '../services/blog/posts.service'

@Injectable()
export class PostActions {
  static GET_POSTS = 'GET_POSTS';
  constructor(private postService: PostService, private ngRedux: NgRedux<IAppState>) {

  }

  getPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.ngRedux.dispatch({
        type: PostActions.GET_POSTS,
        payload: res
      })
    })
  }




}
