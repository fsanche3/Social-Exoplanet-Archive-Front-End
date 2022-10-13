import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any[] = [];
  @Input() postId: any;

  constructor(private postServ: PostService) { }

  ngOnInit(): void {
    this.getComments();
  }

 async getComments(){
    let resp = await this.postServ.getCommentsByPost(this.postId);
    this.comments = resp;
  }

}
