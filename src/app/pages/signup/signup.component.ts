import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {

    ngOnInit() {
        console.log('Sign up comp loaded');
    }
}