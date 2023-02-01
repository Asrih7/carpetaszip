import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { PipesModule } from 'src/app/pipes/pipes.module';
import { SafeUrlPipe } from '../../pipes/safe-url';

import { DocViewerPageRoutingModule } from './doc-viewer-routing.module';

import { DocViewerPage } from './doc-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //PipesModule,
    DocViewerPageRoutingModule
  ],
  declarations: [DocViewerPage, SafeUrlPipe]
})
export class DocViewerPageModule {}
