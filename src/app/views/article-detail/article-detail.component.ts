import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../logic/interfaces/article';
import { ArticleService } from '../../logic/services/articleService/article.service';
import { Router } from '@angular/router';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  loading: boolean = true;
  article?: Article;
  content?: string;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    let slug: string = this.route.snapshot.paramMap.get("slug") || "";
    let content_url: string;
    this.articleService.getArticleBySlug(slug).subscribe({
      next: x => {
        this.loading = false;
        this.article = x;
        content_url = this.article.content;
        this.articleService.getContent(content_url).subscribe(x => this.content = x);
      },
      error: err => this.utilities.onError(err)
    })
  }
  };
