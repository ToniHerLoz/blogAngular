import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TopicsComponent },
  {path: 'topic/:id', component: TopicDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
