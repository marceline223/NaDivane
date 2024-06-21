import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/HeaderComponent";
import {Button} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './router/app-routing.module';
import {ImageModule} from "primeng/image";
import {MenubarModule} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {SearchToolBar} from "./components/toolbar/SearchToolBar";
import {MainPage} from "./modules/catalog/MainPage";
import {ItemList} from "./components/item-list/ItemList";
import {ItemCard} from "./components/item-card/ItemCard";
import {DataViewModule} from "primeng/dataview";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPage,
    SearchToolBar,
    ItemList,
    ItemCard,
  ],
  imports: [
    BrowserModule,
    Button,
    ToolbarModule,
    InputTextModule,
    RouterOutlet,
    AppRoutingModule,
    ImageModule,
    MenubarModule,
    Ripple,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
