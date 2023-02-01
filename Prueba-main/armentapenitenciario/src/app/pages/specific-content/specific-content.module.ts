import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificContentPageRoutingModule } from './specific-content-routing.module';

import { SpecificContentPage } from './specific-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificContentPageRoutingModule
  ],
  declarations: [SpecificContentPage]
})
export class SpecificContentPageModule {}
