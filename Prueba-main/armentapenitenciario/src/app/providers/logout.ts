import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

/*
  Generated class for the LogoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({ 
  providedIn: 'root' 
})
export class LogoutProvider {

  constructor(public http: HttpClient, private storage: Storage, private router: Router) {
    //console.log('Hello LogoutProvider Provider');
  }

  // ocultarMenu(){
  //   let tabs = document.querySelectorAll('.tabbar');
  //   if ( tabs !== null ) {
  //     Object.keys(tabs).map((key) => {
  //       tabs[ key ].style.transform = 'translateY(56px)';
  //     });
  //   } // end if
  // }

  logout()
  {
    // Se limpia la memoria
    this.storage.clear();

    // Se oculta el menú
    //this.ocultarMenu();

    // Se redirecciona a la página de login
    //const root = this.app.getRootNav();    
    //root.popToRoot();
    //this.navCtrl.setRoot(LoginPage);
    this.router.navigate(['/login']);
  }

}
