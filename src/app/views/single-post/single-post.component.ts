import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../services/blog/posts.service';
import { Post } from '../../services/blog/post';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  post$: Observable<any>;
  loading: boolean;
  pageId: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {


  }

  getPost(id) {
    this.post$ = this.store.select('posts').map(posts => posts.filter(post => post.id === id))
    this.post$.subscribe(console.log)
    //     @select(['todos']) todos$;
    // filteredTodos$ = this.todos$.map(todos=>todos.filter(todo=>todo.id==='xr34dfg')

    //code that redux will be replacing
    // this.postService.getPost(id).subscribe(res => {
    //
    //
    //   console.log(res);
    //
    //   this.post = res;
    //   this.pageId = this.post.id;
    // }, (err) => console.log(err), () => this.loading = false);

    //if store is not empty, get post from store

  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      let id = params['id'];
      this.loading = true;
      this.getPost(id);
    })
  }

}
