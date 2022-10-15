import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() loggedInUser: any;
  @Output() loggedOut: EventEmitter<any> = new EventEmitter();
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  constructor(private router: Router, private authServ: AuthService, private postServ: PostService) { }
  
  ngOnInit(): void {//nice
  }
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  logout(){
    this.loggedInUser = null;
    this.authServ.logOut();
    this.loggedOut.emit();
    this.router.navigate(['login-register']);
  }

  goHome(){
    this.router.navigate(['home']);
  }

  goProfile(){
    this.postServ.setThroughNav(true);
    this.router.navigate(['profile']);
  }

  signIn(){
    this.router.navigate(['login-register']);
  }
}
