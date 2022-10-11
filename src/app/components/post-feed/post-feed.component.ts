import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private postServ: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts( ){
    let resp= await this.postServ.getPostByPlanet(this.planet);
    this.posts = resp;
  }

}
