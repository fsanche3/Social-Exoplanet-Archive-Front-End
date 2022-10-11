import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { PlanetStageComponent } from './components/planet-stage/planet-stage.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component'
import { ExoplanetsService } from './services/exoplanets.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { PostFeedComponent } from './components/post-feed/post-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetStageComponent,
    NavComponent,
    PostComponent,
    PostFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    
  ],
  providers: [ExoplanetsService,PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
