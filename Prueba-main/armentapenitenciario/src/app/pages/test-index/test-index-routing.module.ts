import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestIndexPage } from './test-index.page';

const routes: Routes = [
  {
    path: '',
    component: TestIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestIndexPageRoutingModule {}
