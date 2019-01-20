import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MarriageAboutUsComponent } from './aboutus/aboutus.component';
import { MarriageParallaxComponent } from './parallax/parallax.component';
import { MarriageFamilyComponent } from './family/family.component';
import { MarriageEventComponent } from './event/event.component';


@NgModule({
  imports: [
    CommonModule,
    MarriageRoutingModule
  ],
  declarations: [
    BannerComponent,
    NavBarComponent,
    MarriageBaseComponent,
    MarriageAboutUsComponent,
    MarriageParallaxComponent,
    MarriageFamilyComponent,
    MarriageEventComponent
  ]
})
export class MarriageModule { }
