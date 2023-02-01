import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginForgetPage } from './login-forget.page';

const routes: Routes = [
  {
    path: '',
    component: LoginForgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginForgetPageRoutingModule {}
