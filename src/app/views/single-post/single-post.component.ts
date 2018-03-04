import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../services/blog/posts.service';
import { Post } from '../../services/blog/post';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  post: Post;
  loading: boolean;
  pageId: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  getPost(id) {
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
    // this.route.params.forEach((params: Params) => {
    //
    //   let id = params['id'];
    //   this.loading = true;
    //   this.getPost(id);
    //   })
  }

}
