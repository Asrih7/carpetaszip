import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  respuesta(pregunta){
    switch (pregunta){
      case 1:
        this.alert('¿Cómo entro en la app?', 'Para entrar en la App debes utilizar el mismo email y contraseña que utilizas para entrar en el Aula Virtual.');
        break;
      case 2:
        this.alert('¿Cómo consigo una cuenta?', 'Para crear una cuenta de alumno debes ponerte en contacto con tu centro y solicitar matricularte en un curso.');
        break;
      case 3:
        this.alert('¿Qué hago si he olvidado mi contraseña?', 'Puedes generar una nueva contraseña a través de la propia App o desde la web del Aula Virtual pulsando en el enlace "¿Olvidaste tu contraseña?".');
        break;
      case 4:
        this.alert('¿Puedo descargar documentos?', 'Desde la App podrás ver todos los documentos actualizados en tiempo real pero no podrás descargarlos. Si deseas descargarlos deberás hacerlo desde la web del Aula Virtual, siempre y cuando el centro permita la descarga de los mismos.');
        break;
      case 5:
        this.alert('¿Cómo veo los vídeos en pantalla completa?', 'Sólo tienes que girar tu dispositivo en horizontal para poder verlos en pantalla completa.');
        break;
      case 6:
        this.alert('¿Por qué los vídeos no se escuchan?', 'Revisa que tu dispositivo no tenga el silencio activo o cualquier otro modo que elimine los sonidos en la reproducción de vídeos.');
        break;
      case 7:
        this.alert('¿Cómo actualizo la app?', 'Encontrarás la última versión de la app en la tienda de aplicaciones.');
        break;
    }
  }

  async alert(cabecera: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: cabecera,
      message: mensaje,
      buttons: ['Entendido']
    });
    await alert.present();
  }
}
