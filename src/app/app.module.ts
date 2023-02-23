import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ArticlesComponent,
    AboutMeComponent,
    HomeComponent,
    ArticleComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
