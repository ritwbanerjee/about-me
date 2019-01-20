import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-parallax',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.scss']
})

export class MarriageParallaxComponent implements AfterViewInit, OnInit {

    windowWidth: number;
    imageUrl: string;

    ngAfterViewInit() {
        jQuery('.parallax').parallax();
    }

    ngOnInit() {
        this.windowWidth = window.innerWidth;

        if (this.windowWidth <= 468) {
            this.imageUrl = '../../../assets/konnagar.JPG';
        } else {
            this.imageUrl = '../../../assets/stairs.jpg';
        }
    }
}
