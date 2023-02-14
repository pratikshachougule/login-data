import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LogInComponent} from '../app/log-in/log-in.component';
import {UserDataComponent} from '../app/user-data/user-data.component';
import {UnderstandingPerposeComponent} from '../app/understanding-perpose/understanding-perpose.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'log-in',component:LogInComponent},
    {path:'users',component:UserDataComponent},
    {path:'users1',component:UnderstandingPerposeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
