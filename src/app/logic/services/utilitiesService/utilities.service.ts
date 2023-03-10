import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  // an even bigger optimization would be 
  // to get those two values from an api
  image_src: string = "https://i.ibb.co/HhmVRB2/5.jpg";
  image_alt: string = "profile picture of author Gabriele Boccarusso";

  constructor(
    private router: Router,
    private metaTags: Meta,
    private title: Title
  ) {}

  private makeKeywordsString(tags: string[]) {
    let result: string = "";

    for (let i: number = 0; i < tags.length-1; ++i) {
      result += tags.at(i) + ', ';
    }
    result += tags.at(tags.length-1);

    return result;
  }

  public setHeadData(
    title: string,
    description: string,
    tags: string[],
    image_src: string = this.getProfilePictureSource(),
    image_alt: string = this.getProfilePictureAlt()
  ) {
    console.log(window.location.href);
    let url: string = window.location.href;
    this.title.setTitle(`${title} | Gabriele Boccarusso`);
    this.metaTags.addTags([
      { name: 'author', content: 'Gabriele Boccarusso' },
      { name: 'description', content: description },
      { name: 'keywords', content: this.makeKeywordsString(tags) },
      { name: 'og:url', content: url },
      { name: 'canonical', content: url },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: title },
      { name: 'og:image', content: image_src },
      { name: 'og:image:alt', content: image_alt },
      { name: 'og:image:type', content: 'image/jpeg' },
      { name: 'og:locale', content: 'en_US'}
    ]);
  }

  public onError(err: any) {
    console.log("error: " + err.status);
    if (err.status == 404) {
      this.router['navigate'](['/404']);
    }
  }

  public getProfilePictureSource(): string {
    return this.image_src;
  }

  public getProfilePictureAlt(): string {
    return this.image_alt;
  }


}
