import { Component } from '@angular/core';
import { Tag } from '../data/interfaces/tag';
import { TagService } from '../data/services/tagService/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: Tag[];

  constructor(
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.tagService.getAllTags().subscribe(x => this.tags = x);
  }
}
