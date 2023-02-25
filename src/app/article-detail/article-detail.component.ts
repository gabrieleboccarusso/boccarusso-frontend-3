import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../data/interfaces/article';
import { ArticleService } from '../data/services/articleService/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  article?: Article;
  content?: string;

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    let slug: string = this.route.snapshot.paramMap.get("slug") || "";
    let content_url: string;
    this.articleService.getArticleBySlug(slug).subscribe(x => {
      this.article = x;
      console.log(x);
      content_url = this.article?.content || "";
      this.articleService.getContent(content_url).subscribe(x => this.content = x);
})};

  }
