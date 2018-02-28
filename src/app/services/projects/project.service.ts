import { Injectable } from '@angular/core';
import { PROJECTS } from '../project-data';
import { Project } from '../project';


@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {

    return Promise.resolve(PROJECTS);

  }
}
