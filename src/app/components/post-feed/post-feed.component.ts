import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {

  message: string = "There arent any post yet, be the first to post!";
  posts: any[]= [];
  @Input() planet: string = "";
  pageSlice: any;
  
  constructor(private postServ: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts( ){
    let resp= await this.postServ.getPostByPlanet(this.planet);
    this.posts = resp;
     this.pageSlice = this.posts.slice(0,5);

  }

  onPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.posts.length) {
      endIndex = this.posts.length;
    }
    this.pageSlice = this.posts.slice(startIndex, endIndex);
  }



}
