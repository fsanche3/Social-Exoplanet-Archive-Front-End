import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Planet from 'src/app/models/planet';
import { ExoplanetsService } from 'src/app/services/exoplanets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planets: Planet[] = [];
  dataSource: any;
  displayedColumns: string[] = ['pl_name','disc_year','pl_orbper','disc_telescope'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private exoServ: ExoplanetsService,private router: Router) { }

  ngOnInit(): void {
    this.getAllPlanets();
  }

  getAllPlanets(){
    this.exoServ.getAllPlanets()?.subscribe(
      (response : any) => {
        this.planets = response;
        this.dataSource = new MatTableDataSource<Planet>(this.planets)
        this.dataSource.paginator = this.paginator; 
        this.dataSource.sort = this.sort;

      },
    )
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

goToPlanetStage(name: string){
  localStorage.setItem("name", name);
  this.router.navigate(['planet-stage']);
}
}
