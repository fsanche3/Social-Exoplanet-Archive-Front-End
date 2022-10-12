import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { PlanetStageComponent } from './components/planet-stage/planet-stage.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', 
    pathMatch: 'full'
  },
  {path : 'home',  component: HomeComponent},
  {path: 'planet-stage', component: PlanetStageComponent},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'register-login', component: RegisterLoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
