import { Component, OnInit } from '@angular/core';
import Planet from 'src/app/models/planet';
import { ExoplanetsService } from 'src/app/services/exoplanets.service';
import { PostService } from 'src/app/services/post.service';
import { ExoUserService } from 'src/app/services/exo-user.service';



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
  imgProp: any;
  imgUploaded: boolean = false;

  constructor(private exoServ: ExoplanetsService, private postServ:PostService,
    private userServ: ExoUserService) { }

  ngOnInit(): void {
    this.getPlanet();
  }

 

  getFile(event: any){
    if(event.target.files[0].size > 200000){
      alert("File size exceeds capicity. Please choose another.");
      return;
    } else {
      this.file = event.target.files[0];
    }
  }

  uploadImg() {
    if (this.file) {
      this.userServ.uploadImage(this.file).subscribe((resp: any) => {
        this.imgProp = resp;
        this.imgUploaded = true;
        alert("Uploaded and ready for post.")
      })
    } else {
      alert("Please select a file first");
    }
  }

  async submitPost(){
    if(this.texts == "" && this.imgUploaded == false){
      alert("Cannot submit empty post!");
    } else {
      if(this.imgProp){
      let resp = await this.postServ.upsertPost(this.texts, this.planets[0].pl_name, this.imgProp.url);
      if(resp){
        window.location.reload();
      }
    } else{
      let resp = await this.postServ.upsertPost(this.texts, this.planets[0].pl_name, "");
      if(resp){
        window.location.reload();
      }
    }
    }
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

