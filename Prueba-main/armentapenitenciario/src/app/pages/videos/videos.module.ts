import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { VideosPageRoutingModule } from './videos-routing.module';

import { VideosPage } from './videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    VideosPageRoutingModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
