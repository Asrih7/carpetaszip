import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { NotificationDetailPageRoutingModule } from './notification-detail-routing.module';

import { NotificationDetailPage } from './notification-detail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    NotificationDetailPageRoutingModule
  ],
  declarations: [NotificationDetailPage]
})
export class NotificationDetailPageModule {}
