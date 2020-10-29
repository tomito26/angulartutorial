import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {TutorialListComponent}  from  './components/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';


const routes: Routes = [
  {path: '', redirectTo: 'tutorials', pathMatch: 'full'},
  {path:'tutorials', component: TutorialListComponent},
  {path:'tutorials/:id',component: TutorialDetailsComponent},
  {path: 'add', component: AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
