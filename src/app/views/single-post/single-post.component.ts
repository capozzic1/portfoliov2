import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../services/blog/posts.service';
import { Post } from '../../services/blog/post';
import { select } from '@angular-redux/store';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  post$;
  loading: boolean;
  pageId: any;
  @select() posts$;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  getPost(id) {
    //     @select(['todos']) todos$;
    // filteredTodos$ = this.todos$.map(todos=>todos.filter(todo=>todo.id==='xr34dfg')


    this.post$ = this.posts$.map(posts => posts.filter(post => post.id === id));
    console.log(this.post$.id);

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
