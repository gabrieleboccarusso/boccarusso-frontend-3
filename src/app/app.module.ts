import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ArticlesComponent,
    AboutMeComponent,
    HomeComponent,
    ProjectsComponent,
    TagsComponent,
    SearchComponent,
    HeaderComponent,
    SidebarComponent,
    TagDetailComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class AppModule { }
