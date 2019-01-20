import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-marriage-base',
    templateUrl: './base.component.html'
})

export class MarriageBaseComponent implements OnInit {

    windowWidth: number;
    firstImageUrl: string;
    secondImageUrl: string;

    ngOnInit() {
        this.windowWidth = window.innerWidth;

        if (this.windowWidth <= 468) {
            this.firstImageUrl = '../../../assets/konnagar.JPG';
            this.secondImageUrl = '../../../assets/munnar.jpg';
        } else {
            this.firstImageUrl = '../../../assets/stairs.jpg';
            this.secondImageUrl = '../../../assets/chitradurga-3.jpg';
        }
    }
}
