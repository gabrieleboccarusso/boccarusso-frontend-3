import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/project';
import { ApiSorterService } from '../apiSorterService/api-sorter.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private api: ApiSorterService,
    private http: HttpClient
  ) { }

  public getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.api.allProjectsURL());
  }
}
