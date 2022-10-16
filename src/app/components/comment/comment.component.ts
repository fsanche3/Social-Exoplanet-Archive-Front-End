import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any[] = [];
  @Input() comment: any;
  @Input() postId: any;
  @Input() likes: number = 0;
  likeToggle: boolean = false;
  reply: boolean = false;
  ids: number[]=[];



  constructor(private postServ: PostService, private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.likes = this.comment.usersDto.length;
    if(this.authServ.loggedInUser){
      this.isLiked();
    }
    
  }

  isLiked(){
    for(let i = 0; i < this.comment.usersDto.length; i++){
        this.ids[i] = this.comment.usersDto[i].id;
    }
    if(this.ids.includes(this.authServ.loggedInUser.id)){
      this.likeToggle = true;
      return;
    } else {
      this.likeToggle = false;
    }

  }
  
  setUserNav(){
    localStorage.setItem('profile-user',this.comment.userDto.id);
    localStorage.setItem('throughNav', 'false');
    this.postServ.setUser(this.comment.userDto.id);
    this.postServ.setThroughNav(false);
    this.router.navigate(['profile']);
  }

 async Like(){

  if(this.authServ.loggedInUser){
    
  if(this.likeToggle == false){
    let resp = await this.postServ.LikePost(this.comment.id);
    if(resp){
      this.likeToggle = true;
      this.likes++;
    } else {
      alert("Like could not be made");
    }
  } else {
    this.takeAwayLike();
  }

} else {
  alert("You need to be logged in for like to work");
}
  }

  async takeAwayLike(){
    if(this.authServ.loggedInUser){

    if(this.likeToggle == true){
      let resp = await this.postServ.unLikePost(this.comment.id);
      if(resp){
        this.likeToggle = false;
        this.likes--;
      } else {
        alert("unlike could not be made");
      }
    } else {
      this.Like();
    }

  } else {
    alert("You need to be logged in for like to work");
  }
  }

  toggleReply(){
    this.reply = !this.reply;
  }
}
