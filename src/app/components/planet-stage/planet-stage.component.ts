import { Component, OnInit } from '@angular/core';
import Planet from 'src/app/models/planet';
import { ExoplanetsService } from 'src/app/services/exoplanets.service';
import { FormsModule } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-planet-stage',
  templateUrl: './planet-stage.component.html',
  styleUrls: ['./planet-stage.component.css']
})
export class PlanetStageComponent implements OnInit {

  planets: Planet[]= [];
  name : string = "";
  file: any;
  texts: string = "";

  constructor(private exoServ: ExoplanetsService, private postServ: PostService) { }

  ngOnInit(): void {
    this.getPlanet();
  }

 async uploadPost(texts: string, planet: string, img_url: string){
  let success = await this.postServ.upsertPost(texts, planet, img_url);
  if(success){
    alert("post created");
  } else{
    alert("This account name is already being used please try another unique name");
  }
  }

  getFile(event: any){
    this.file = event.target.files[0];
    console.log("file", this.file)
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

