import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'app-marriage-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})

export class MarriageAboutUsComponent implements AfterViewInit {

    showNav: boolean;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.data.subscribe((response: any) => {
            if (response && response.direct) {
                this.showNav = response.direct;
            }
        });
    }

    ngAfterViewInit() {
        jQuery('.parallax').parallax();
    }
}
