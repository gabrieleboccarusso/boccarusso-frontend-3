import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../data/interfaces/article';
import { ArticleService } from '../data/services/articleService/article.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent {
  tag?: string;
  articles?: Article[];

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get("slug") || "";
    console.log(this.tag);
    this.articleService.getArticlesByTag(this.tag).subscribe(x => this.articles = x);
  }
}
