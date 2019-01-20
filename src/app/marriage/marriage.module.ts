import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MarriageAboutUsComponent } from './aboutus/aboutus.component';
import { MarriageParallaxComponent } from './parallax/parallax.component';
import { MarriageFamilyComponent } from './family/family.component';
import { MarriageEventComponent } from './event/event.component';
import { MarriageMapComponent } from './map/map.component';


@NgModule({
  imports: [
    CommonModule,
    MarriageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZRJY618_20Va6lFAgRcBaE0V9qkF5WYQ'
    })
  ],
  declarations: [
    BannerComponent,
    NavBarComponent,
    MarriageBaseComponent,
    MarriageAboutUsComponent,
    MarriageParallaxComponent,
    MarriageFamilyComponent,
    MarriageEventComponent,
    MarriageMapComponent
  ]
})
export class MarriageModule { }
