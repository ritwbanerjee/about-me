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
                time: '7:30am Onwards ...'
            },
            'marriage': {
                title: 'Marriage',
                date: '28th January, 2019',
                time: '5:30pm Onwards ...'
            },
            'reception': {
                title: 'Reception & Dinner',
                date: '30th January, 2019',
                time: '7:30pm Onwards ...'
            }
        };

        this.panel = 'haldi';
    }

    openPanel(panel: string) {
        this.panel = panel;
    }
}
