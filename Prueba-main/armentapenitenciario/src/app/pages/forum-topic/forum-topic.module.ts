import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { ForumTopicPageRoutingModule } from './forum-topic-routing.module';

import { ForumTopicPage } from './forum-topic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ForumTopicPageRoutingModule
  ],
  declarations: [ForumTopicPage]
})
export class ForumTopicPageModule {}
