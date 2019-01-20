import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-marriage-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MarriageMapComponent {
    @Input() lat: number;
    @Input() lng: number;
    zoom = 17;
}
