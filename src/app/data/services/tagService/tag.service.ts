import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag } from '../../interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    // private sorter: ApiSorterService,
    private http: HttpClient
  ) { }

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("http://localhost:8080/tag");
  }
}
