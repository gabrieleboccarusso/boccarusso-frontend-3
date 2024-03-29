import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/homepage/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { TagsComponent } from './views/tags/tags.component';
import { SearchComponent } from './views/search/search.component';
import { TagDetailComponent } from './views/tag-detail/tag-detail.component';
import { ArticleDetailComponent } from './views/article-detail/article-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'tags/:slug', component: TagDetailComponent},
  {path: 'search/:title', component: SearchComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: ':slug', component: ArticleDetailComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
