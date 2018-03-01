import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/blog/posts.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }
  posts: any[];
  loading: boolean;
  getPosts() {

    this.postService.getPosts().subscribe(res => {
      //console.log(res)

      this.posts = res
      //this.loading = false;
    }, (err) => console.log(err), () => {

      this.loading = false;
    })
  }
  ngOnInit() {

    this.getPosts();
    this.loading = true;
  }

  selectPost(id) {
    this.router.navigate([id]);
  }

}
//How do I use map to extract only the API data I need?
