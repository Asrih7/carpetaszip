import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestIndexPageRoutingModule } from './test-index-routing.module';

import { TestIndexPage } from './test-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestIndexPageRoutingModule
  ],
  declarations: [TestIndexPage]
})
export class TestIndexPageModule {}
