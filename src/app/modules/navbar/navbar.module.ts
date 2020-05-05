import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [NavBarComponent],
    exports: [NavBarComponent]
})

export class NavBarModule {}