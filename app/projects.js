import {Component} from 'angular2/core';

@Component({
    selector: 'projects',
    templateUrl: '/app/projects.html'
})

export class Projects {
  constructor() {
      console.log('Projects');
  }
}
