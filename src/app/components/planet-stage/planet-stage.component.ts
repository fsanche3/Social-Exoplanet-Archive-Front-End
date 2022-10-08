import { Component, OnInit } from '@angular/core';
import Planet from 'src/app/models/planet';
import { ExoplanetsService } from 'src/app/services/exoplanets.service';

@Component({
  selector: 'app-planet-stage',
  templateUrl: './planet-stage.component.html',
  styleUrls: ['./planet-stage.component.css']
})
export class PlanetStageComponent implements OnInit {

  planets: Planet[]= [];
  name : string = "";

  constructor(private exoServ: ExoplanetsService) { }

  ngOnInit(): void {
    this.getPlanet();
  }

  getPlanet(){
     this.name = localStorage.getItem('name')!
   this.exoServ.getListByName(this.name)?.subscribe(
      (response : any) => {
        this.planets = response;
      },
    )
  }
}

