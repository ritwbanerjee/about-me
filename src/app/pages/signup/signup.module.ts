import { NgModule } from '@angular/core';
import { SignUpRoutingModule } from './signup.routing.module';
import { NavBarModule } from '../../modules/navbar/navbar.module';
import { SignUpComponent } from './signup.component';

@NgModule({
    imports: [
        SignUpRoutingModule,
        NavBarModule
    ],
    declarations: [SignUpComponent],
    providers: [],
    exports: [SignUpComponent]
})

export class SignUpModule {}