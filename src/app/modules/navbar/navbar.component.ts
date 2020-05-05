import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NavItems } from './navbar.model';
declare var jQuery: any;

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit, AfterViewInit {

    navbar: any;
    sticky: any;
    navItems: NavItems[];

    ngOnInit() {
        this.navItems = environment.nav;
    }

    ngAfterViewInit() {
        jQuery('.sidenav').sidenav();
    }
}
