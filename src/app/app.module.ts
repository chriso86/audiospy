import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumComponent } from './pages/album/album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, // Local App Core Module
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
