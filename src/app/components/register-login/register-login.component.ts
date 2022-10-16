import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {
  }

  async register(){

    let success = await this.authServ.register(this.username, this.password);
    if (success) {
      this.router.navigate(['login-register']);
    } else {
      alert("Username is already being used.")
    }
  }

  goToLogin(){
this.router.navigate(['login-register']);
  }

}
