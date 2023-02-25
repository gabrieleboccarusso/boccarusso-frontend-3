import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../data/interfaces/article';
import { ArticleService } from '../data/services/articleService/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue?: string;
  articles?: Article[];

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.searchValue = this.route.snapshot.paramMap.get("title") || "";
    this.articleService.getArticlesByTitle(this.searchValue).subscribe(x => this.articles = x);
  }
}
