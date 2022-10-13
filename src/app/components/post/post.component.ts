import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { ExoplanetsService } from 'src/app/services/exoplanets.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Input() likes: number = 0;
  likeToggle: boolean = false;
  ids: number[]=[];
  reply: boolean = false;
  texts: string= "";
  imgUploaded: boolean = false;
  imgProp: any;

  constructor(private postServ: PostService, private authServ: AuthService, private exoServ: ExoplanetsService) { }

  ngOnInit(): void {
    this.likes = this.post.usersDto.length;
    if(this.authServ.loggedInUser){
    this.isLiked()
    }
  }

  isLiked(){
    for(let i = 0; i < this.post.usersDto.length; i++){
        this.ids[i] = this.post.usersDto[i].id;
    }
    if(this.ids.includes(this.authServ.loggedInUser.id)){
      this.likeToggle = true;
      return;
    } else {
      this.likeToggle = false;
    }

  }

 async Like(){

  if(this.authServ.loggedInUser){
    
  if(this.likeToggle == false){
    let resp = await this.postServ.LikePost(this.post.id);
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
      let resp = await this.postServ.unLikePost(this.post.id);
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
  
  async submitComment(){
    if(this.texts == ""){
      alert("Cannot submit empty post!");
    } else {
      if(this.imgProp){
      let resp = await this.postServ.uploadComment(this.post.id ,this.texts, this.exoServ.crrPlanet, this.imgProp.url);
      if(resp){
        window.location.reload();
      }
    } else{
      let resp = await this.postServ.uploadComment(this.post.id ,this.texts, this.exoServ.crrPlanet, "");
      if(resp){
        window.location.reload();
      }
    }
    }
  }

  toggleReply(){
    this.reply = !this.reply;
  }




}
