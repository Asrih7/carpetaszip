import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { ForumPageRoutingModule } from './forum-routing.module';

import { ForumPage } from './forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    PipesModule,
    ForumPageRoutingModule
  ],
  declarations: [ForumPage]
})
export class ForumPageModule {}
