import { Component, OnInit } from '@angular/core';
import { FamilyDetails } from './family.model';

declare var jQuery: any;

@Component({
    selector: 'app-marriage-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.scss']
})

export class MarriageFamilyComponent implements OnInit {

    family: FamilyDetails[];

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
