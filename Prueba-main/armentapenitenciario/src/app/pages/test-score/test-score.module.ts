import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { PipesModule } from 'src/app/pipes/pipes.module';

import { TestScorePageRoutingModule } from './test-score-routing.module';

import { TestScorePage } from './test-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //PipesModule,
    TestScorePageRoutingModule
  ],
  declarations: [TestScorePage]
})
export class TestScorePageModule {}
