import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects/project.service'
import { Project } from '../../services/project';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { console.log(this.projects); }
  projects: Project[];

  getHeroes() {
    this.projectService.getProjects().then(projects => this.projects = projects);

  }

  ngOnInit(): void {
    this.getHeroes();

  }

}
