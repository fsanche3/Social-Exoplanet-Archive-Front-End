import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comment-feed',
  templateUrl: './comment-feed.component.html',
  styleUrls: ['./comment-feed.component.css']
})
export class CommentFeedComponent implements OnInit {

  comments: any[] = [];
  @Input() postId: any;



  constructor(private postServ: PostService, private authServ: AuthService) { }

  ngOnInit(): void {
    this.getComments();
  }

  async getComments(){
    let resp = await this.postServ.getCommentsByPost(this.postId);
    this.comments = resp;
  }

}
