import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/blog/posts.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }
  posts: any[];
  getPosts() {

    this.postService.getPosts().subscribe(res => {
      console.log(res)
      this.posts = res
    });
  }
  ngOnInit() {
    this.getPosts();
  }

}
//How do I use map to extract only the API data I need?
