import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamilyDetails } from './family.model';

declare var jQuery: any;

@Component({
    selector: 'app-marriage-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.scss']
})

export class MarriageFamilyComponent implements OnInit {

    family: FamilyDetails[];
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
        this.family = [{
            title: 'Bride\'s Family',
            members: [{
                name: 'Subhendu Dutta',
                imageUrl: '../../../assets/bride_father.jpg'
            }, {
                name: 'Kankana Dutta',
                imageUrl: '../../../assets/bride_mother.jpg'
            }, {
                name: 'Shreya Dutta',
                imageUrl: '../../../assets/bride_sister.jpg'
            }]
        }, {
            title: 'Groom\'s Family',
            members: [{
                name: 'Samir Banerjee',
                imageUrl: '../../../assets/groom_father.jpg'
            }, {
                name: 'Swaty Banerjee',
                imageUrl: '../../../assets/groom_mother.jpg'
            }, {
                name: 'Mahua Banerjee',
                imageUrl: '../../../assets/groom_sister.jpg'
            }]
        }];
    }
}
