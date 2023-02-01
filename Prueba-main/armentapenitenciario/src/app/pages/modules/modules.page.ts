import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

  idCurso: number;
  accesoModulos: number;
  searchQuery: string = '';
  usuario: any = [];  
  listaTemas: any[];
  listaTemasTemp: any[];

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage) {    
  }

  ngOnInit() {
    //this.initializeTemas();
  }

  ionViewWillEnter() {
    this.initializeTemas();
  }


  async initializeTemas() {

  const loading = await this.loadingCtrl.create({
    message: "Cargando...",
    duration: 500
  });
  await loading.present();

  // Se obtiene el id del curso de la memoria
  this.storage.get('idCurso').then((val) => {
    if (val != null && val != undefined){
      this.idCurso = val;       
    }
    else{
      // Si no se han recuperado los datos se vuelve a la página de login
      loading.dismiss();
      this.proveedorLogout.logout();
    }
  });

  // Se obtienen los datos del usuario de la memoria
  this.storage.get('usuario').then((val) => {
    if (val != null && val != undefined){
      this.usuario = JSON.parse(val);
      // Se consultan todos los módulos/temas del curso
      this.proveedor.consultarModulos(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
      .subscribe(
        (data)=>{this.parseTemasJson(data);},
        (error)=>{console.log(error);},
        () =>{loading.dismiss()}
      )
    }
    else{
      // Si no se han recuperado los datos se vuelve a la página de login
      loading.dismiss();
      this.proveedorLogout.logout();
    }
  });
}

async parseTemasJson(data)
  {
    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.listaTemas = [];
      this.listaTemasTemp = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.listaTemas.push(jsonObject);
        this.listaTemasTemp.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaTemas = [];
      const alert = await this.alertCtrl.create({
        header: 'Sin Temas',
        message: 'Este curso no contiene temas',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  getItems(ev: any) {

    if (this.listaTemasTemp != null && this.listaTemasTemp != undefined){
      // Reset items back to all of the items
      this.listaTemas = this.listaTemasTemp;

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.listaTemas = this.listaTemas.filter((item) => {
          return ((item.Titulo.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.IdTema == val));
        })
      }
    }
  }

  irAModulo(modulo: any){
    //this.navCtrl.push(ModuleDetailPage, {modulo: modulo});
    this.navParamService.setNavData(modulo);
    this.router.navigate(['/module-detail']);
  }
  
  ayuda()
  {
    //this.navCtrl.push(FaqPage);
    this.router.navigate(['/faq']);
  }
}
