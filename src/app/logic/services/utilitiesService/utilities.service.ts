import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private router: Router
  ) { }

  public onError(err: any) {
    console.log("error: " + err.status);
    if (err.status == 404) {
      this.router['navigate'](['/404']);
    }
  }
}
