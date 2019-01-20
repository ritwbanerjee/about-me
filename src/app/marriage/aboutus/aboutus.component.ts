import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})

export class MarriageAboutUsComponent implements AfterViewInit {

    ngAfterViewInit() {
        jQuery('.parallax').parallax();
    }
}
