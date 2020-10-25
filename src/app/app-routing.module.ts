import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ROUTES} from "./_ROUTES";

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
