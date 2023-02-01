import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';

@Component({
  selector: 'app-login-forget',
  templateUrl: './login-forget.page.html',
  styleUrls: ['./login-forget.page.scss'],
})
export class LoginForgetPage implements OnInit {

  username: string;

  constructor(private router: Router, public proveedor: AulavirtualrestProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async recuperar(){

    const loading = await this.loadingCtrl.create({
      message: "Recuperando...",
      duration: 500
    });
    await loading.present();

    // Se genera una nueva contraseña y se le envía por email al alumno
    this.proveedor.resetearContraseña(this.username)
    .subscribe(
      //(data)=>{console.log(data);},
      (data)=>{this.nuevaContraseñaGenerada(data);},
      (error)=>{console.log(error);},
      () =>{loading.dismiss()}
    )    
  }

  nuevaContraseñaGenerada(data){

    // Se valida si ha habido algún error en la recuperacion
    if (data.Error == -1)
    {
      // Si ha habido algún error se informa al usuario
      this.alert('Ooops!', data.Mensaje);      
    }
    // Si todo ha ido bien
    else
    {
      // Se informa al usuario de que todo ha ido bien
      this.alert('Hecho!', data.Mensaje);

      // Se envía al usuario a la página de inicio
      this.router.navigate(['/login']);
    }
  }

  async alert(cabecera: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: cabecera,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
