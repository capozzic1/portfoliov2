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

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  getPost(id) {
    this.postService.getPost(id).subscribe(res => {


      //console.log(res);

      this.post = res;
    });
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      let id = params['id'];

      this.getPost(id);
    })
  }

}
