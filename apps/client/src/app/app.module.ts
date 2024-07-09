import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {AddItemDialog} from "./components/add-item-dialog/AddItemDialog";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StyleClassModule} from "primeng/styleclass";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPage,
    SearchToolBar,
    ItemList,
    ItemCard,
    AddItemDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Button,
    ToolbarModule,
    InputTextModule,
    RouterOutlet,
    AppRoutingModule,
    ImageModule,
    MenubarModule,
    Ripple,
    DataViewModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    StyleClassModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
