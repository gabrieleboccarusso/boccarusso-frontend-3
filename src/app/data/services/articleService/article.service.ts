import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article';
import { ApiSorterService } from '../apiSorterService/api-sorter.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private api: ApiSorterService,
    private http: HttpClient
  ) { }

  public getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.api.allArticlesURL());
  }

  public getArticleBySlug(slug: string): Observable<Article>{
    return this.http.get<Article>(this.api.articleBySlug(slug));
  }
}
