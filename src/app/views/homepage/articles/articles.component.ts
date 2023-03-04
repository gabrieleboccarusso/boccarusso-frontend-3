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

  constructor (
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(x => {
      x.forEach(article => this.articles.push(article))
    });
  }

  loadMore() {
    this.articleService.getAllArticles().subscribe(x => {
      x.forEach(article => this.articles.push(article))
    });
  }
}
