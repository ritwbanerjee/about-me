import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-parallax',
    templateUrl: './parallax.component.html',
})

export class MarriageParallaxComponent implements AfterViewInit {

    ngAfterViewInit() {
        jQuery('.parallax').parallax();
    }
}
