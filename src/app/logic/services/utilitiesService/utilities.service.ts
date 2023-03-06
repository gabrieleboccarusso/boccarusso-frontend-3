import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

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
    url: string,
    image: string,
    type: string,
    tags: string[]
  ) {

    this.title.setTitle(`${title} | Gabriele Boccarusso`);
    this.metaTags.addTags([
      { name: 'author', content: 'Gabriele Boccarusso' },
      { name: 'description', content: description },
      { name: 'keywords', content: this.makeKeywordsString(tags) },
      { name: 'og:url', content: url },
      { name: 'canonical', content: url },
      { name: 'og:type', content: type },
      { name: 'og:title', content: title },
      { name: 'og:image', content: image },
      { name: 'og:image:type', content: 'image/jpeg' },
      { name: 'og:locale', content: 'en_US'},
      { name: 'og:image:alt', content: 'picture of author and creator of content Gabriele Boccarusso'}
    ]);
  }

  public onError(err: any) {
    console.log("error: " + err.status);
    if (err.status == 404) {
      this.router['navigate'](['/404']);
    }
  }


}
