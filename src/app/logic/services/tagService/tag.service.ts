import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../../interfaces/tag';
import { ApiSorterService } from '../apiSorterService/api-sorter.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private api: ApiSorterService,
    private http: HttpClient
  ) { }

  public getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.api.allTagsURL());
  }
}
