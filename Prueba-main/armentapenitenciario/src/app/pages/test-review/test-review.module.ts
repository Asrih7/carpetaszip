import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';

import { TestReviewPageRoutingModule } from './test-review-routing.module';

import { TestReviewPage } from './test-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SwiperModule,
    TestReviewPageRoutingModule
  ],
  declarations: [TestReviewPage]
})
export class TestReviewPageModule {}
