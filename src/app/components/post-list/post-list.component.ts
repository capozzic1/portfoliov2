import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/blog/posts.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
//import { PostActions } from '../../redux/post.actions';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: []
})

export class PostListComponent implements OnInit {
  posts$: Observable<any>;

  constructor(
    private postService: PostService,
    private router: Router,
    private store: Store<any>
  ) {
    this.posts$ = store.select('posts');
    //this.posts$.subscribe(console.log)
  }

  loading: boolean;
  //  @select() posts$;
  getPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.store.dispatch({
        type: 'GET_POSTS',
        payload: res
      })

    })


  }
  ngOnInit() {
    this.getPosts();

    //this.loading = true;
  }

  selectPost(id) {
    this.router.navigate([id]);
  }

}
//How do I use map to extract only the API data I need?
