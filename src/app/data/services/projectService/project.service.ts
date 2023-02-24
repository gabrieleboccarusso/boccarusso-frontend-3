import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    // private sorter: ApiSorterService,
    private http: HttpClient
  ) { }

  public getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>("http://localhost:8080/project");
  }
}
