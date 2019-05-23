import {Post} from './post.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})

export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

getPost() {
  return this.posts;
}
getPostUpdated(){
  this.postsUpdated.asObservable();
}
addPost(title: string, content: string) {
const post: Post = {title: title, content: content };
this.posts.push(post);
this.postsUpdated.next([...this.posts]);
}

}