import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import * as posts from './post.actions';
import { PostService } from '../services/blog/posts.service';
import { GetPostsSuccessAction } from './post.actions';
@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  @Effect() getPosts$ = this.actions$
    .ofType(posts.GET_POSTS)
    .switchMap(() => {
      return this.postService.getPosts()
        .map(posts => new GetPostsSuccessAction(posts));
    })
}
