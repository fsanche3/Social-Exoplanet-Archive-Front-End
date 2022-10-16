import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUrl: string = `${environment.apiUrl}auth`;
  userUrl: string = `${environment.apiUrl}user/`;
  loggedInUser: any;

  public token: string = '';

  constructor(private http: HttpClient) { }

  async getLoggedInUser() {
    if (!this.loggedInUser) {
      await this.getUser();
    }
    return this.loggedInUser;
  }


  async login(username: string , password: string){
    let credentials = {username, password};

    let resp = await fetch(this.tokenUrl,{
      method:'POST',
      body:JSON.stringify(credentials),
      headers:new Headers({
          'Content-Type':'application/json'
      })
  });
      if(resp.status === 200){
        let loggedInUser = await resp.json();

        if(loggedInUser){
          sessionStorage.setItem('token', resp.headers.get('Auth')!);
          sessionStorage.setItem('userId', loggedInUser.id);
          return true;
        } 
        return false;
      } else {
        return false;
      }
    }

    logOut(){
      this.loggedInUser = null;
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('token');
    }

    async getUser(){
      let userId = sessionStorage.getItem('userId');
      if(userId){
        let resp = await fetch(this.userUrl+userId, {
          headers: new Headers({
            'Authorization': sessionStorage.getItem('token')!
          })
        });
  
        if (resp.ok) {
          this.loggedInUser = await resp.json();
        }
  
      }
    }

    async register(username: string , password: string){
      let credentials = {username, password};
  
      let resp = await fetch(this.tokenUrl+'/register',{
        method:'POST',
        body:JSON.stringify(credentials),
        headers:new Headers({
            'Content-Type':'application/json'
        })
    });
        if(resp.status === 201){
            return true;
        } else {
          return false;
        }
      }
    
  
}
