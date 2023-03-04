import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSorterService {
  domain: string = "http://localhost:8080";
  tag_url: string = this.domain + "/tag";
  project_url: string = this.domain + "/project";
  article_url: string = this.domain + "/article";

  constructor() { }

  public allTagsURL(): string {
    return this.tag_url;
  }

  public allProjectsURL(): string{
    return this.project_url;
  }

  public allArticlesURL(): string {
    return this.article_url;
  }

  public totalArticlesNumURL() {
    return this.article_url + "/total";
  }

  public pagingArticlesURL(page: number, size: number): string {
    return this.article_url + `?page=${page}&size=${size}`;
  }

  public articleBySlugURL(slug: string) {
    return this.article_url + '/' + slug;
  }

  public articleByTitleURL(title: string): string {
    return this.article_url + "/title?value=" + title;
  }

  public articlesByTagURL(tag: string): string {
    return this.article_url + "/tag?value=" + tag;
  }
 }
