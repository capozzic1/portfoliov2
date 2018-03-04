import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from './post';
@Injectable()
export class PostService {

  private _wpBase = "https://wp-blog-dreamcap.000webhostapp.com/wp-json/wp/v2/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {

    return this.http.get<any>(`${this._wpBase}posts?_embed`);
  }

  getPost(id) {
    //return this.http.get(`${this._wpBase}posts/${id}?_embed`);
  }

}
//let test = new PostsService();
// console.log(test.getPosts());
