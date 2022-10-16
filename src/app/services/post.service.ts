import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = `${environment.apiUrl}`;
  user: number = 0;
  throughNav: any;


  constructor() { // nice
  }

  async upsertPost(texts: string, planet: string, img_url?: string){
    let info = {texts, planet, img_url};

    let resp = await fetch(this.url+"post/upsert",{
      method:'POST',
      body:JSON.stringify(info),
      headers:new Headers({
          'Content-Type':'application/json',
          'Authorization': sessionStorage.getItem('token')+''
      })
  });
    if(resp.status === 200){
      return true;
    } else {
      return false;
    }
  }

  async uploadComment(postId: number, texts: string, planet: string, img_url?: string ){
    let info = {texts, planet, img_url};

    let resp = await fetch(this.url+"post/comment/"+postId,{
      method:'POST',
      body:JSON.stringify(info),
      headers:new Headers({
          'Content-Type':'application/json',
          'Authorization': sessionStorage.getItem('token')+''
      })
  });
    if(resp.status === 200){
      return true;
    } else {
      return false;
    }

  }

  async getPostByPlanet(planet:string){
    let resp = await fetch(this.url+"post/"+planet,{
      method:'GET',
      headers:new Headers({
        'Content-Type':'application/json',
    })
    });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  async LikePost(postId: number){
    let resp = await fetch(this.url+"post/like/"+postId,{
      method:'PUT',
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')+''
    })
    });
    if(resp.status === 200){
      return true;
    } else {
      return false;
    }
  }

  async unLikePost(postId: number){
    let resp = await fetch(this.url+"post/unlike/"+postId,{
      method:'PUT',
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization': sessionStorage.getItem('token')+''
    })
    });
    if(resp.status === 200){
      return true;
    } else {
      return false;
    }
  }

  async getCommentsByPost(postId: number){
    let resp = await fetch(this.url+"post/post-comments/"+postId,{
      method:'GET',
      headers:new Headers({
        'Content-Type':'application/json',
    })
    });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  async getPostsByUser(userId: number){
    let resp = await fetch(this.url+"post/user/"+userId,{
      method:'GET',
      headers:new Headers({
        'Content-Type':'application/json',
    })
    });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  async getCommentsByUser(userId: number){
    let resp = await fetch(this.url+"post/user/comments/"+userId,{
      method:'GET',
      headers:new Headers({
        'Content-Type':'application/json',
    })
    });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  async getLikesByUser(userId: number){
    let resp = await fetch(this.url+"post/likes/"+userId,{
      method:'GET',
      headers:new Headers({
        'Content-Type':'application/json',
    })
    });
    if(resp.status === 200){
      return resp.json();
    } else {
      return false;
    }
  }

  getUser(){
    return this.user;
  }

  setUser(a: number){
this.user = a;
  }
  getThroughNav(){
    return this.throughNav;
  }

  setThroughNav(a: any){
this.throughNav = a;
  }
  
}
