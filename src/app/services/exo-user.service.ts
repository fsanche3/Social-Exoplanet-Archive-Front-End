import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExoUserService {

    url: string = `${environment.apiUrl}`;
  
    constructor(private http: HttpClient) { }
  
    public uploadImage(file: File): Observable<string> {
      let parameters = new FormData();
      parameters.append('file',file);
      const headers = new HttpHeaders();
      headers.set('Authorization', sessionStorage.getItem('token')+'')
      return this.http.post<string>(this.url+"user/upload",parameters);
    }
  
    async updateUser(img: string, id: number){
      let info = {img};
  
      let resp = await fetch(this.url+"user/update-img/"+id,{
        method:'PUT',
        body:JSON.stringify(info),
        headers:new Headers({
            'Content-Type':'application/json',
        })
    });
      if(resp.status === 200){
        return true;
      } else {
        return false;
      }
    }
   
    async getUser(id: number){
      let resp = await fetch(this.url+"user/"+id,{
        method:'GET',
        headers:new Headers({
            'Content-Type':'application/json',
            'Authorization': sessionStorage.getItem('token')+''
        })
    });
      if(resp.status === 200){
        return resp.json();
      } else {
        return false;
      }
    }
  }