import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestIndexReviewPageRoutingModule } from './test-index-review-routing.module';

import { TestIndexReviewPage } from './test-index-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestIndexReviewPageRoutingModule
  ],
  declarations: [TestIndexReviewPage]
})
export class TestIndexReviewPageModule {}
