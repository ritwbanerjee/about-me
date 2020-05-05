import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { PersonalData } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    constructor(
        readonly loginService: LoginService
        ) {}

    isSubmitButtonActive: boolean = false;
    payload: PersonalData;
    loginForm = new FormGroup({
        emailId: new FormControl(''),
        password: new FormControl(''),
      });
    
    loginOptions = environment.loginOptions;

    ngOnInit() {
        this.loginForm.valueChanges.subscribe((response) => {

            if (
                response.emailId === '' || 
                response.emailId === 'undefined' ||
                response.password === '' ||
                response.password === 'undefined') {
                    this.isSubmitButtonActive = false;
                } else {
                    this.payload = response;
                    this.isSubmitButtonActive = true;
                }
        })
    }

    onSubmit() {
        this.loginService.login(this.payload).subscribe(response => {
            console.log('Login Successful: ', response);
        })
    }

}