// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// @base
import { HeaderComponent } from './base/header/header.component';
import { SidebarComponent } from './base/sidebar/sidebar.component';

// @view
import { AppComponent } from './app.component';
import { AboutMeComponent } from './views/homepage/about-me/about-me.component';
import { ArticlesComponent } from './views/homepage/articles/articles.component';
import { HomeComponent } from './views/homepage/home.component';
import { SkillsComponent } from './views/homepage/skills/skills.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SearchComponent } from './views/search/search.component';
import { TagsComponent } from './views/tags/tags.component';
import { TagDetailComponent } from './views/tag-detail/tag-detail.component';
import { ArticleDetailComponent } from './views/article-detail/article-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


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
    ArticleDetailComponent,
    PageNotFoundComponent
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
