import { Component } from '@angular/core';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';
import { Project } from '../../logic/interfaces/project';
import { ProjectService } from '../../logic/services/projectService/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  loading: boolean = true;
  projects?: Project[];

  constructor(
    private utilities: UtilitiesService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: x => {
        this.loading = false;
        this.projects = x;
      },
      error: err => this.utilities.onError(err)
    });
  }
}
