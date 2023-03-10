import { Component } from '@angular/core';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  title: string = "Page not found";
  description: string = "Whatever you were looking for is not here";

  constructor(
    private utilities: UtilitiesService
  ) {}

  ngOnInit() {
    this.utilities.setHeadData(
      this.title,
      this.description,
      ['404', 'Error']
      // TODO: add 404 image
    );
  }
}
