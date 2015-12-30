import {Component} from 'angular2/core';
import {Projects} from '../app/projects/projects';

@Component({
    selector: 'my-app',
    template: '<projects>Loading...</projects>',
    directives: [Projects]
})

export class App {
    constructor(projects:Projects) {
        this.projects = projects;
        console.log(this.projects);
    }
}