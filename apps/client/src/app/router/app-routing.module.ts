import {RouterModule, Routes} from "@angular/router";
import {MainPage} from "../modules/catalog/MainPage"
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: MainPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
