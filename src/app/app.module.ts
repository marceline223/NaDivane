import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/HeaderComponent";
import {Button} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './router/app-routing.module';
import {ImageModule} from "primeng/image";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Button,
    ToolbarModule,
    InputTextModule,
    RouterOutlet,
    AppRoutingModule,
    ImageModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
