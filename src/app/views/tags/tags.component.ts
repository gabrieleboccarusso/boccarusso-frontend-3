import { Component } from '@angular/core';

import { Tag } from 'src/app/logic/interfaces/tag';
import { TagService } from 'src/app/logic/services/tagService/tag.service';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  loading: boolean = true;
  tags?: Tag[];

  constructor(
    private tagService: TagService,
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    this.tagService.getAllTags().subscribe({
      next: x => {
        this.loading = false;
        this.tags = x;
      },
      error: err => this.utilities.onError(err)
    });
  }
}
