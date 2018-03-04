import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/blog/posts.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { PostActions } from '../../redux/post.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostActions]
})

export class PostListComponent implements OnInit {

  constructor(private postService: PostService, private router: Router, private actions: PostActions) { }
  @select() posts;
  loading: boolean;
  //  @select() posts$;
  getPosts() {
    this.actions.getPosts();

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
