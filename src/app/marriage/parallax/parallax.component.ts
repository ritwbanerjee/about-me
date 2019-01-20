import { Component, AfterViewInit, Input } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-parallax',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.scss']
})

export class MarriageParallaxComponent implements AfterViewInit {

    windowWidth: number;
    @Input() imageUrl: string;

    ngAfterViewInit() {
        jQuery('.parallax').parallax();
    }
}
