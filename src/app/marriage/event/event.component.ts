import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})

export class MarriageEventComponent implements OnInit {

    timeObject: object;
    panel: string;

    ngOnInit() {
        jQuery('.collapsible').collapsible();

        this.timeObject = {
            'haldi': {
                title: 'Haldi Ceremony',
                date: '28th January, 2019',
                time: '7:30am Onwards ...',
                lat: 22.6975203,
                lng: 88.3533639
            },
            'marriage': {
                title: 'Marriage',
                date: '28th January, 2019',
                time: '5:30pm Onwards ...',
                lat: 22.7032588,
                lng: 88.357817
            },
            'reception': {
                title: 'Reception & Dinner',
                date: '30th January, 2019',
                time: '7:30pm Onwards ...',
                lat: 22.7064841,
                lng: 88.3578812
            }
        };

        this.panel = 'haldi';
    }

    openPanel(panel: string) {
        this.panel = panel;
    }
}
