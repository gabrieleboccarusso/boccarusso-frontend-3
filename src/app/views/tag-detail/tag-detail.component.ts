import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../logic/interfaces/article';
import { ArticleService } from '../../logic/services/articleService/article.service';

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
    this.articleService.getArticlesByTag(this.tag).subscribe(x => this.articles = x);
    this.tag = this.unsanitize(this.tag);
  }

  unsanitize(slug: string): string {
    return slug.replace('-', ' ');
  }
}
