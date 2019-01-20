import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarriageBaseComponent } from './base/base.component';
import { MarriageAboutUsComponent } from './aboutus/aboutus.component';
import { MarriageFamilyComponent } from './family/family.component';
import { MarriageEventComponent } from './event/event.component';
import { MarriageRsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
  {
    path: '',
    component: MarriageBaseComponent
  }, {
    path: 'aboutus',
    component: MarriageAboutUsComponent,
    data: {
      direct: true
    }
  }, {
    path: 'people',
    component: MarriageFamilyComponent,
    data: {
      direct: true
    }
  }, {
    path: 'event',
    component: MarriageEventComponent,
    data: {
      direct: true
    }
  }, {
    path: 'rsvp',
    component: MarriageRsvpComponent,
    data: {
      direct: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageRoutingModule { }
