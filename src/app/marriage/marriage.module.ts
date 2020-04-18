import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarModule } from '../modules/navbar/navbar.module';
import { MarriageAboutUsComponent } from './aboutus/aboutus.component';
import { MarriageParallaxComponent } from './parallax/parallax.component';
import { MarriageFamilyComponent } from './family/family.component';
import { MarriageEventComponent } from './event/event.component';
import { MarriageMapComponent } from './map/map.component';
import { MarriageRsvpComponent } from './rsvp/rsvp.component';


@NgModule({
  imports: [
    CommonModule,
    MarriageRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZRJY618_20Va6lFAgRcBaE0V9qkF5WYQ'
    }),
    NavBarModule
  ],
  declarations: [
    BannerComponent,
    MarriageBaseComponent,
    MarriageAboutUsComponent,
    MarriageParallaxComponent,
    MarriageFamilyComponent,
    MarriageEventComponent,
    MarriageMapComponent,
    MarriageRsvpComponent
  ]
})
export class MarriageModule { }
