import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProjectOneComponent} from './components/project-one/project-one.component';
import {ProjectTwoComponent} from './components/project-two/project-two.component';
import {ProjectThreeComponent} from './components/project-three/project-three.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project1', component: ProjectOneComponent },
  { path: 'project2', component: ProjectTwoComponent },
  { path: 'project3', component: ProjectThreeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
