import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.page.html',
  styleUrls: ['./doc-viewer.page.scss'],
})
export class DocViewerPage implements OnInit {

  item: any;
  url: any;

  constructor(private router: Router, private navParamService: NavparamService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { 

    this.item = this.navParamService.getNavData();
    this.obtenerUrl();

    document.addEventListener('screenshot', function() {
      this.capturaDetectada();
    }, false);
  }

  ngOnInit() {
  }

  obtenerUrl(){

    //this.url = "Content-Security-Policy: frame-ancestors 'self' " + this.item.URL + "X-Frame-Options: ALLOW-FROM https://www.dropbox.com";

    if (this.item.Fuente == "local"){
      
      // VISUALIZACIÓN
      this.url = "http://aulavirtualctp.com/Academias/VisorDocumentos/Web/ViewerMobile.aspx?file=" + this.item.ID;
      // console.log(this.url);
      // DESCARGA
      // TODO: Comprobar si la descarga está habilitada y si es encriptado o no
      //this.url = "http://aulavirtualctp.com/Academias/docCurso.ashx?Id=" + this.item.ID;      
    }
    else if (this.item.Fuente == "dropbox"){
      this.url = this.item.URL + "&raw=1";
    }
    else if (this.item.Fuente == "genially"){
      this.url = this.item.URL;
    }
    else{
      //this.navCtrl.push(DocsPage);
      this.router.navigate(['/docs']);
    }
  }

  async capturaDetectada(){
    const alert = await this.alertCtrl.create({
      header: 'Atención',
      message: 'Se detectó una captura de pantalla y ha sido comunicado a tu centro para que tome las medidas oportunas',
      buttons: ['OK']
    });
    await alert.present();
    
    //this.navCtrl.push(DocsPage);
    this.router.navigate(['/docs']);
  }
  
}
