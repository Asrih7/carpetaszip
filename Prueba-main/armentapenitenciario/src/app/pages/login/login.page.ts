import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
//import { FacebookPage } from '../facebook/facebook';
//import { TwitterPage } from '../twitter/twitter';
import { Storage } from '@ionic/storage-angular';
import * as CryptoJS from 'crypto-js';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AppConfig } from  '../../../app/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string; //= 'alumno.armentapenitenciario@aulavirtualctp.es';
  password: string; //= 'Armenta2022';
  
  browser;

  private SECERET_KEY: string = 'm18KvVPXCk456W3h';

  constructor(private router: Router, public proveedor: AulavirtualrestProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage, private iab: InAppBrowser) { }

  ngOnInit() {

  }

  ionViewWillEnter() {    

    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        //this.navCtrl.push(TabsPage);
        this.router.navigate(['/tabs']);
      }
    }, (error) => {
      console.log('login is required');
    });
  }

  // Encrypt
  public Encrypt(input: string): CryptoJS.WordArray {
      var iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000'); 
      var encrypted = CryptoJS.AES.encrypt(input, CryptoJS.enc.Utf8.parse(this.SECERET_KEY), { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: iv});
      return encrypted;
  }

  // Decrypt
  public Decrypt(input: CryptoJS.WordArray): string { 
    var iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000'); 
    var decrypted = CryptoJS.AES.decrypt(input, CryptoJS.enc.Utf8.parse(this.SECERET_KEY), { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: iv});
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }

  async login(){

    const loading = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    await loading.present();

    // Se encriptan los datos de acceso
    var usernameEncrypted = this.Encrypt(this.username);
    var passwordEncrypted = this.Encrypt(this.password);
    //console.log(usernameEncrypted.toString());
    //console.log(passwordEncrypted.toString());

    // Se llama al servicio de Login
    this.proveedor.loginIOS(usernameEncrypted.toString(), passwordEncrypted.toString(), AppConfig.id)
    .subscribe(
      //(data)=>{console.log(data);},
      (data)=>{this.validarLogin(data);},
      (error)=>{console.log(error);},
      () =>{loading.dismiss()}
    )      

    //this.proveedor.login(this.usr, this.psw, this.id)
    // this.proveedor.login(usernameEncrypted.toString(), passwordEncrypted.toString(), this.id)
    // .subscribe(
    //   (data)=>{console.log(data);},
    //   //(data)=>{this.usuario=data;},
    //   (error)=>{console.log(error);}
    // )


    //console.log(this.usuario)
    //this.validarUsuario(this.usuario);

    //this.navCtrl.push(HomePage);

    // if (this.data != null)
    //   this.loginOKAlert();
    // else
    //   this.loginKOAlert();

    //this.mensajeAlert();
  }

  validarLogin(usuario){

    // const loader = this.loadingCtrl.create({
    //   content: "Control de acceso...",
    //   duration: 1000
    // });
    // loader.present();

    // Se valida si ha habido algún error en el Login
    if (usuario.Error < 0)
    {
      // Si ha habido algún error se informa al usuario
      this.Alert(usuario.Mensaje);      
    }
    // Si todo ha ido bien
    else
    {
      // console.log('[i] Login - Se almacenan el usuario en memoria: ');
      // console.log('[i] AuthorizationToken: ' + usuario.Mensaje.AuthorizationToken);
      // console.log('[i] Nick: ' + usuario.Mensaje.Nick);
      // console.log('[i] Oposicion: ' + usuario.Mensaje.NombreOposicion);

      // Se almacenan los datos en memoria
      this.storage.set('usuario', JSON.stringify(usuario));

      // Se envía al usuario a la página de inicio
      //this.navCtrl.push(TabsPage);
      //this.navCtrl.navigateForward('/tabs');
      this.router.navigate(['/tabs']);
      //this.navCtrl.setRoot(TabsPage);
    }

  }


  validarUsuario(usuario:any){
    //console.log(usuario);
  }

  async Alert(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Ooops!',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  ayuda()
  {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
    //this.navCtrl.navigateForward('/faq');
  }

  forget(){
    //this.navCtrl.push(ForgetPage);
    this.router.navigate(['/forget']);
    //this.navCtrl.navigateForward('/forget');
  }

  facebook(){
    //this.navCtrl.push(FacebookPage);
    this.browser = this.iab.create(AppConfig.facebookUrl);
  }

  twitter(){
    //this.navCtrl.push(TwitterPage);
    this.browser = this.iab.create(AppConfig.twitterUrl);
  }

  googleplus(){
    //this.navCtrl.push(TwitterPage);
    this.browser = this.iab.create(AppConfig.gplusUrl);
  }

}
