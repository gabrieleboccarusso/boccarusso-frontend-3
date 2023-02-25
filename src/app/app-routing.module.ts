import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TagsComponent } from './tags/tags.component';
import { SearchComponent } from './search/search.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'tags/:slug', component: TagDetailComponent},
  {path: 'search',   redirectTo: 'search/'},
  {path: 'search/:slug', component: SearchComponent},
  {path: ':slug', component: ArticleDetailComponent},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
