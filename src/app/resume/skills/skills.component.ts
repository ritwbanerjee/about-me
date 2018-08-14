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
      label: 'Communication',
      value: '100%'
    }, {
      label: 'Collaboration',
      value: '100%'
    }, {
      label: 'Leadership',
      value: '90%'
    }, {
      label: 'Man Management',
      value: '80%'
    }];
   }

  ngOnInit() {
  }

}

export interface SkillsModel {
  label: string;
  value: string;
}
