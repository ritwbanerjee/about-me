import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WorkExperience } from './work-experience';
declare var jQuery: any;

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit, AfterViewInit {

  public workExperience: object;

  constructor() {
    this.workExperience = WorkExperience;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible();
  }
}
