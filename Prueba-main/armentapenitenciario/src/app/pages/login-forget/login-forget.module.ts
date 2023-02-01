import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginForgetPageRoutingModule } from './login-forget-routing.module';

import { LoginForgetPage } from './login-forget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginForgetPageRoutingModule
  ],
  declarations: [LoginForgetPage]
})
export class LoginForgetPageModule {}
