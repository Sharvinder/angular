import { utf8Encode } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home' ,component: UserDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }