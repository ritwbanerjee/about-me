import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})

export class MarriageEventComponent implements OnInit {

    timeObject: object;
    panel: string;

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

    ngOnInit() {
        jQuery('.collapsible').collapsible();

        this.timeObject = {
            'haldi': {
                title: 'Haldi Ceremony',
                date: '28th January, 2019',
                time: '7:30am Onwards ...',
                venue: '13/14, Bakultala Lane Konnagar',
                lat: 22.6976751,
                lng: 88.3527622
            },
            'marriage': {
                title: 'Marriage',
                date: '28th January, 2019',
                time: '5:30pm Onwards ...',
                venue: 'Konnagar Sammilani Club',
                lat: 22.7024984,
                lng: 88.3589058
            },
            'reception': {
                title: 'Reception & Dinner',
                date: '30th January, 2019',
                time: '7:30pm Onwards ...',
                venue: 'Konnagar Sohardho Ceremony Hall',
                lat: 22.7060714,
                lng: 88.3578809
            }
        };

        this.panel = 'marriage';
    }

    openPanel(panel: string) {
        this.panel = panel;
    }
}
