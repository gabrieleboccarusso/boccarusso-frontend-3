import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../logic/interfaces/article';
import { ArticleService } from '../../../logic/services/articleService/article.service';

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
  ) {
    // the initial code was in a `ngOnInit` but would not work if
    // the menu would get pressed when the url is already the one
    // by subscribing into the constructor works although might
    // not be a good practice
    route.params.subscribe(val => {
      this.lookup(val['title']);
    });
  }

  lookup(title: string) {
    this.searchValue = title;
    this.articleService.getArticlesByTitle(this.searchValue).subscribe(x => this.articles = x);
  }
}
