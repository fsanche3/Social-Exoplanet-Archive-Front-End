import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = `${environment.apiUrl}`;

  constructor() { }

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

}
