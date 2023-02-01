import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { SplashScreen } from '@capacitor/splash-screen';

import { LoginPage } from './pages/login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
      this.hideSplashScreen();
    });
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

    // Hide the splash (you should do this on app launch) 
    //await SplashScreen.hide();
  }

  // Hide SplashScreen
  private async hideSplashScreen(){
    await SplashScreen.hide();
  }

  // Show SplashScreen
  // https://capacitorjs.com/docs/apis/splash-screen
  private async showSplashScreen(){
    await this.platform.ready();

    // Show the splash autohide:
    // await SplashScreen.show({
    //   showDuration: 0,
    //   autoHide: true,
    // });

    // Show the splash for an indefinite amount of time:
    // await SplashScreen.show({
    //   autoHide: false,
    // });

    // Show the splash for two seconds and then automatically hide it:
    // await SplashScreen.show({
    //   showDuration: 2000,
    //   autoHide: true,
    // });

  }
}
