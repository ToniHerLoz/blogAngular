import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopicsComponent,
    TopicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
