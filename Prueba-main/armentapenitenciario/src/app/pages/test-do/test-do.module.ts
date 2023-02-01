import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { TestDoPageRoutingModule } from './test-do-routing.module';

import { TestDoPage } from './test-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    TestDoPageRoutingModule
  ],
  declarations: [TestDoPage]
})
export class TestDoPageModule {}
