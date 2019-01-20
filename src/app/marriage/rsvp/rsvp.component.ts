import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})

export class MarriageRsvpComponent implements AfterViewInit {

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
        jQuery('select').formSelect();
    }
}
