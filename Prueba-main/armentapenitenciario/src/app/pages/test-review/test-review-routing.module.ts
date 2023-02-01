import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestReviewPage } from './test-review.page';

const routes: Routes = [
  {
    path: '',
    component: TestReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestReviewPageRoutingModule {}
