import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDoPage } from './test-do.page';

const routes: Routes = [
  {
    path: '',
    component: TestDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDoPageRoutingModule {}
