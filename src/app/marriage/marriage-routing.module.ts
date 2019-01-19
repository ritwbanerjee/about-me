import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarriageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {
    path: '',
    component: MarriageBaseComponent
  }, {
    path: 'aboutus',
    component: MarriageBaseComponent
  }, {
    path: 'story',
    component: MarriageBaseComponent
  }, {
    path: 'people',
    component: MarriageBaseComponent
  }, {
    path: 'event',
    component: MarriageBaseComponent
  }, {
    path: 'rsvp',
    component: MarriageBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageRoutingModule { }
