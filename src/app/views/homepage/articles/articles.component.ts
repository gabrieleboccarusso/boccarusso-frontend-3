import { Component } from '@angular/core';
import { Article } from 'src/app/logic/interfaces/article';
import { ArticleService } from 'src/app/logic/services/articleService/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: Article[] = [];
  totalNumArticles: number = 0;
  currentPage: number = 0;
  pageSize:number = 2;
  noMoreArticles: boolean = false;

  constructor (
    private articleService: ArticleService
  ) {}
  
  ngOnInit() {
    this.articleService.getArticlesTotalNum().subscribe(x => {
      this.totalNumArticles = x;

      this.articleService.getPagingArticles(this.currentPage, this.pageSize).subscribe(x => {
        x.forEach(article => this.articles.push(article))
      });
      this.currentPage++;
      this.totalNumArticles -= this.pageSize;

      if (this.totalNumArticles <= 0) {
        this.noMoreArticles = true;
      }
    });
  }

  loadMore() {
    this.articleService.getPagingArticles(this.currentPage, this.pageSize).subscribe(x => {
      x.forEach(article => this.articles.push(article))
    });

    this.currentPage++;
    this.totalNumArticles -= this.pageSize;
    
    if (this.totalNumArticles <= 0) {
      this.noMoreArticles = true;
    }
  }
}
