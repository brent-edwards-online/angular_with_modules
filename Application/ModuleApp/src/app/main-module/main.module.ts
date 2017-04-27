import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainRoutes } from './main.router';

import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainRoutes
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
