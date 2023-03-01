import { Component } from '@angular/core';
import { Project } from '../../logic/interfaces/project';
import { ProjectService } from '../../logic/services/projectService/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects?: Project[];

  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(x => this.projects = x);
  }
}
