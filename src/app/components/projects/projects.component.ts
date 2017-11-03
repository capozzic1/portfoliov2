import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/projects/project.service';
import { Project } from '../../services/project';
import { WindowRef } from '../../services/window/window.service';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private winRef: WindowRef
  )
  { console.log(this.projects); }
  projects: Project[];
  nativeWindow: any;

  getHeroes() {
    this.projectService.getProjects().then(projects => this.projects = projects);

  }

  openLink(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.getHeroes();

  }

}
