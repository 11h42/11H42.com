import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'projects, [projects]'
})
@View({
    templateUrl: '/app/projects/projects.html',
    directives: [NgFor],
    //template: "<div *ng-for='#project of projects'> <p>{{project.description}} </div>",
})
export class Projects {
    constructor() {
        this.projects = this.getProjects();
    }

    getProjects() {
        return fetch('app/projects.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response);
                return response.text();
            })
            .then((text) => {
                console.log(text);
                return JSON.parse(text);
            })
    }
}
