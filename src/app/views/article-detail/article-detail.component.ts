import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../logic/interfaces/article';
import { ArticleService } from '../../logic/services/articleService/article.service';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  loading: boolean = true;
  article?: Article;
  image_alt?: string;
  content?: string;

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    let slug: string = this.route.snapshot.paramMap.get("slug") || "";
    this.articleService.getArticleBySlug(slug).subscribe({
      next: x => this.onArticle(x),
      error: err => this.utilities.onError(err)
    })
  }

  onArticle(article: Article) {
    this.loading = false;
    this.article = article;
    this.image_alt = `main picture of Gabriele Boccarusso's article ${article.title}`;
    this.articleService.getContent(this.article.content)
      .subscribe(x => this.content = x);

    this.utilities.setHeadData(
      article.title,
      article.tagline,
      article.tag.map(t => {return t['name']}),
      article.image,
      this.image_alt
    );
  }
  };
