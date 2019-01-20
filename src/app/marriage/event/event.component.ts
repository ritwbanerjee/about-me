import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})

export class MarriageEventComponent implements OnInit {

    ngOnInit() {
        jQuery('.collapsible').collapsible();
    }
}
