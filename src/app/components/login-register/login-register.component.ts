import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  @Output() loggedIn: EventEmitter<any> = new EventEmitter();
  username: any;
  password: any;

  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {
  }

  async login(){

    let success = await this.authServ.login(this.username, this.password);
    if (success) {
      this.loggedIn.emit();
      this.router.navigate(['home']);
    } else {
      alert("Incorrect credentials kindly try again.")
    }
  }


  goToRegister(){
    this.router.navigate(['register-login']);
  }

}
