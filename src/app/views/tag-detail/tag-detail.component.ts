import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';
import { Article } from '../../logic/interfaces/article';
import { ArticleService } from '../../logic/services/articleService/article.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent {
  loading: boolean = true;
  tag?: string;
  articles?: Article[];

  constructor (
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get("slug") || "";
    this.articleService.getArticlesByTag(this.tag).subscribe({
      next: x => {
        this.loading = false;
        this.articles = x;
      },
      error: err => this.utilities.onError(err)
    });
    this.tag = this.unsanitize(this.tag);
  }

  unsanitize(slug: string): string {
    return slug.replace('-', ' ');
  }
}
