import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestScorePage } from './test-score.page';

const routes: Routes = [
  {
    path: '',
    component: TestScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestScorePageRoutingModule {}
