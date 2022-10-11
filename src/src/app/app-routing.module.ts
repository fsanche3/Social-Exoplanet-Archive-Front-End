import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanetStageComponent } from './components/planet-stage/planet-stage.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', 
    pathMatch: 'full'
  },
  {path : 'home',  component: HomeComponent},
  {path: 'planet-stage', component: PlanetStageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
