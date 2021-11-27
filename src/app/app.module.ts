import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component';
import { StoryComponent } from './components/story/story.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    StoryComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
