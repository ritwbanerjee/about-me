import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-marriage-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MarriageMapComponent {
    @Input() lat = 22.7064841;
    @Input() lng = 88.3578812;
    zoom = 13;
}
