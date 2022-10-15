import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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

  
  constructor(private postServ: PostService, private authServ: AuthService) { }

  ngOnInit(): void {// nice
    this.isUserLoggedIn(); 
    this.setUpProfile();
  }

 isUserLoggedIn(){
  if(this.authServ.loggedInUser){
    this.loggedIn = true;
  } else{
    this.loggedIn = false;
  }
 }

 setUpProfile(){
  if(this.loggedIn && !this.postServ.getThroughNav()){

  if(this.postServ.getUser() == this.authServ.loggedInUser.id){
    this.isUser = true;
    this.profileImg = this.authServ.loggedInUser.img;
    this.username = this.authServ.loggedInUser.username;
  } else {
    this.isUser = false;
    // make the call using id and set
    this.setCredentials();
  }
  } else {
    if(this.loggedIn && this.postServ.getThroughNav()){
      this.isUser = true;
      this.profileImg = this.authServ.loggedInUser.img;
      this.username = this.authServ.loggedInUser.username;
    } else if(!this.loggedIn) {
        this.isUser = false;
        this.setCredentials();
    }
  }
 }

 setCredentials(){
  // get user dto using id and set img....
 }

 


}

