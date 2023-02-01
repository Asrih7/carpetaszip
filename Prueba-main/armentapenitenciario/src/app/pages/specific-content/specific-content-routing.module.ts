import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificContentPage } from './specific-content.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificContentPageRoutingModule {}
