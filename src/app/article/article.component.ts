import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let slug: string | null = this.route.snapshot.paramMap.get("slug");
    console.log(slug);
  }
}
