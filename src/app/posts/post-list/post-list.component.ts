

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

 posts: Post[] = [];
 isLoading = false;
 totalPages = 10;
 postsPerPage = 5;
 pageSizeOptions = [1,2,5,10];
 private postsSub: Subscription;

constructor(public postsService: PostService) {

}
ngOnInit() {
  this.isLoading = true;
   this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
    this.isLoading = false;
    this.posts = posts; } );

}
onDelete(postId: string) {
   this.postsService.deletePost(postId);
}
ngOnDestroy() {
this.postsSub.unsubscribe();
}
onChangedPage(pageData: PageEvent) {}

}
