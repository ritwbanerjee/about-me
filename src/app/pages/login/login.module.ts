import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { NavBarModule } from '../../modules/navbar/navbar.module';
import { LoginTemplateModule } from '../../templates/login-template/login-template.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        NavBarModule,
        LoginTemplateModule,
        HttpClientModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService],
    exports: []
})

export class LoginModule {}
