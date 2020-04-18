import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  skills: SkillsModel[];

  constructor() {
    this.skills = [{
      label: 'Angular 2+',
      value: '100%'
    }, {
      label: 'HTML 5',
      value: '100%'
    }, {
      label: 'CSS3',
      value: '90%'
    }, {
      label: 'JAVASCRIPT',
      value: '100%'
    }, {
      label: 'TYPESCRIPT',
      value: '100%'
    }, {
      label: 'NODEJS',
      value: '80%'
    }, {
      label: 'EXPRESSJS',
      value: '100%'
    }, {
      label: 'Microsoft Azure B2C',
      value: '70%'
    }];
   }

  ngOnInit() {
  }

}

export interface SkillsModel {
  label: string;
  value: string;
}
