import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestIndexReviewPage } from './test-index-review.page';

const routes: Routes = [
  {
    path: '',
    component: TestIndexReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIndexReviewPageRoutingModule {}
