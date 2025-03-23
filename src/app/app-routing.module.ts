import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }]
})
export class AppRoutingModule { }
