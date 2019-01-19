import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-marriage-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements AfterViewInit {

    ngAfterViewInit() {
        jQuery('.sidenav').sidenav();
    }
}
