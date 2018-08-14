import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  languages: LanguagesModel[];

  constructor() {
    this.languages = [{
      label: 'English',
      value: '100%'
    }, {
      label: 'Bengali',
      value: '100%'
    }, {
      label: 'Hindi',
      value: '90%'
    }, {
      label: 'German',
      value: '10%'
    }];

   }

  ngOnInit() {
  }

}

export interface LanguagesModel {
  label: string;
  value: string;
}
