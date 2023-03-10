import { Component } from '@angular/core';
import { UtilitiesService } from 'src/app/logic/services/utilitiesService/utilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pfp_src: string;
  pfp_alt: string;

  constructor(
    private utilities: UtilitiesService,
  ) {
    this.pfp_src = utilities.getProfilePictureSource();
    this.pfp_alt = utilities.getProfilePictureAlt();
  }

  ngOnInit() {
    this.utilities.setHeadData(
      "homepage",
      "homepage of Gabriele Boccarusso's official website",
      ['Java', 'Spring Boot', 'REST', 'API', 'Microservices', 'Software Architecture', 'Databases']
    );
  }
}
