import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private router: Router, private authServ: AuthService) { }
  
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
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

  signIn(){
    this.router.navigate(['login-register']);
  }
}
