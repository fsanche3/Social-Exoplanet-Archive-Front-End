import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';
import { ExoUserService } from 'src/app/services/exo-user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isUser: any;
  loggedIn: any;
  profileImg: any;
  username: any;
  likes: number = 0;
  posts: any[]= [];
  comments: any[]= [];
  file: any;
  imgUploaded: boolean = false;
  fileUploaded: boolean = false;
  pageSlice: any;
  
  constructor(private postServ: PostService, private authServ: AuthService, private userServ: ExoUserService) { }

  ngOnInit(): void {// nice
    this.isUserLoggedIn()
    this.setUpProfile();
  }

  getFile(event: any){
    if(event.target.files[0].size > 200000){
      alert("File size exceeds capicity. Please choose another.");
    } else {
      this.file = event.target.files[0];
      this.fileUploaded = true;
    }
  }

  uploadImg() {
    if (this.file) {
      this.userServ.uploadImage(this.file).subscribe((resp: any) => {
        this.profileImg = resp.url;
        this.userServ.updateUser(resp.url, parseInt(localStorage.getItem('profile-user')!));
        this.imgUploaded = !this.imgUploaded;
        window.location.reload();
      })
     
    } else {
      alert("Please select a file first");
    }
    
  }


 isUserLoggedIn(){
  if(this.authServ.loggedInUser){
    this.loggedIn = true;
    return true;
  } else{
    this.loggedIn = false;
    return false;
  }
 }

 async setCredentials(){
  let resp = await this.userServ.getUser(parseInt(localStorage.getItem('profile-user')!));
  if(resp){
    this.profileImg = resp.img;
    this.username = resp.username;
  }
 }

 async setLikes(id: number){
  let resp = await this.postServ.getLikesByUser(id);
  if(resp){
    this.likes = resp.likes;
  }
 }

 async getPostsByUser(id: number){
  let resp = await this.postServ.getPostsByUser(id);
  if(resp){
    this.posts = resp;
    this.pageSlice = this.posts.slice(0,3);
  }
 }
 async getCommentsByUser(id: number){
  let resp = await this.postServ.getCommentsByUser(id);
  if(resp){
    this.comments = resp;
  }
 }

 toggleUploaded(){
  this.imgUploaded = !this.imgUploaded;
 }

 Cancel(){
  this.imgUploaded = !this.imgUploaded;
  this.fileUploaded = !this.fileUploaded;
 }

 async setUpProfile(){
  if(this.loggedIn && localStorage.getItem('throughNav') == "false"){

  if(localStorage.getItem('profile-user') == this.authServ.loggedInUser.id){
    this.isUser = true;
    this.profileImg = this.authServ.loggedInUser.img;
    this.username = this.authServ.loggedInUser.username;
    this.getPostsByUser(parseInt(localStorage.getItem('profile-user')!));
    this.getCommentsByUser(parseInt(localStorage.getItem('profile-user')!));
    this.setLikes(parseInt(localStorage.getItem('profile-user')!));

  } else {
    this.isUser = false;
    this.setCredentials();
    let id = parseInt(localStorage.getItem('profile-user')!);
    this.getPostsByUser(id);
    this.getCommentsByUser(id);
    this.setLikes(id);
  }
  } else {
    if(this.loggedIn && localStorage.getItem('throughNav') == "true"){
      this.isUser = true;
      this.profileImg = this.authServ.loggedInUser.img;
      this.username = this.authServ.loggedInUser.username;
    this.getPostsByUser(parseInt(localStorage.getItem('profile-user')!));
    this.getCommentsByUser(parseInt(localStorage.getItem('profile-user')!));
    this.setLikes(parseInt(localStorage.getItem('profile-user')!));

    } else if(!this.loggedIn) {
        this.isUser = false;
        this.setCredentials();
        let id = parseInt(localStorage.getItem('profile-user')!);
    this.getPostsByUser(id);
    this.getCommentsByUser(id);
    this.setLikes(id);

    }
  }
 }




}

