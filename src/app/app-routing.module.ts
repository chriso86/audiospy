import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from "./_ROUTES";
import {AppResolver} from "./app.resolver";

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [
    AppResolver
  ]
})
export class AppRoutingModule {
}
