import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { DocsPageRoutingModule } from './docs-routing.module';

import { DocsPage } from './docs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    DocsPageRoutingModule
  ],
  declarations: [DocsPage]
})
export class DocsPageModule {}
