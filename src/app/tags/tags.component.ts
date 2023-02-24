import { Component } from '@angular/core';
import { TagService } from '../data/services/tagService/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(
    private tagService: TagService
  ) {}

  ngOnInit() {

    this.tagService.getAllTags().subscribe(x => console.log(x));
  }
}
