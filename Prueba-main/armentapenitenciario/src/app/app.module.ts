import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavparamService } from './services/navparam.service';

import { AulavirtualrestProvider } from './providers/aulavirtualrest';
import { LogoutProvider } from './providers/logout';

import { SafeHtmlPipe } from './pipes/safe-html';
import { SafeUrlPipe } from './pipes/safe-url';

//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { DecimalPipe, DatePipe } from '@angular/common';
import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';
import { SwiperModule } from 'swiper/angular';


@NgModule({
    declarations: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        SwiperModule
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        NavparamService,
        AulavirtualrestProvider,
        LogoutProvider,
        SafeHtmlPipe,
        SafeUrlPipe,
        //StatusBar,
        //SplashScreen,
        InAppBrowser,
        Device,
        DecimalPipe,
        DatePipe,
        GoogleAnalytics,
        CallNumber,
        StreamingMedia
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
