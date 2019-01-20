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
    name: string;
    email: string;
    count: number;

    disableButton = true;

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

    check() {
        if (this.name && this.email && this.count) {
            this.disableButton = false;
        } else {
            this.disableButton = true;
        }
    }

    sendData() {
        const payload = {
            name: this.name,
            email: this.email,
            count: this.count
        };

        window.location.href = `mailto:ritwik2011@gmail.com?subject=RSVP&body=Name%20${payload.name}%20Email%20${payload.email}%20Count%20${payload.count}`;
    }
}
