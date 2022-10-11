import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Planet from '../models/planet';


@Injectable({
  providedIn: 'root'
})
export class ExoplanetsService {

  allPlanetsUrl: string = `${environment.baseUrl}`;
  stagePlanetUrl: string = `${environment.stageUrl}`;

  constructor(private http: HttpClient) { }

 getAllPlanets():Observable<Planet[]>{
  return this.http.get<Planet[]>(`${this.allPlanetsUrl}`,{headers: {'Content-Type': 'text/plain'} });    
  }

  getListByName(name: string):Observable<Planet[]>{
    return this.http.get<Planet[]>(`${this.stagePlanetUrl}+%27`+name+`%27&format=json`,{headers: {'Content-Type': 'text/plain'} })
  }

}
