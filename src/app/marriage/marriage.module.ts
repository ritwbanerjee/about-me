import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    MarriageRoutingModule
  ],
  declarations: [BannerComponent, NavBarComponent, MarriageBaseComponent]
})
export class MarriageModule { }
