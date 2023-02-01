import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { PipesModule } from 'src/app/pipes/pipes.module';
import { VideoPipe } from '../../pipes/video';

import { VideoPlayerPageRoutingModule } from './video-player-routing.module';

import { VideoPlayerPage } from './video-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //PipesModule,
    VideoPlayerPageRoutingModule
  ],
  declarations: [VideoPlayerPage, VideoPipe]
})
export class VideoPlayerPageModule {}
