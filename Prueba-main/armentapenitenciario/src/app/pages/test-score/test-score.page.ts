import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.page.html',
  styleUrls: ['./test-score.page.scss'],
})
export class TestScorePage implements OnInit {

  idCurso: number;
  usuario: any = []; 
  listaResultados: any[];
  listaResultadosTemp: any[];
  numMinutos: number = 0;
  numPreguntas: number = 0;

  constructor(private router: Router, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage, public popoverCtrl: PopoverController, public decimalPipe: DecimalPipe) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initializeResultados();
  }

  async initializeResultados() {

    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      duration: 500
    });
    await loading.present();

    // Se obtienen el id del curso de la memoria
    this.storage.get('idCurso').then((val) => {
      if (val != null && val != undefined){
        this.idCurso = val;       
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);
        // Se consultan los resultados del alumno
        this.proveedor.consultarResultadosCurso(this.usuario.Mensaje.AuthorizationToken, this.idCurso)
        .subscribe(
          (data)=>{this.parseResultadosJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout()
      }
    });
  }

  async parseResultadosJson(data)
  {
    // console.log(data);

    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.listaResultados = [];
      this.listaResultadosTemp = [];

      for(let i=0; i < jsonArray.length; i++)
      {
        let jsonObject = jsonArray[i];
        this.listaResultados.push(jsonObject);
        this.listaResultadosTemp.push(jsonObject);
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout()
    }
    else{
      this.listaResultados = [];
      const alert = await this.alertCtrl.create({
        header: 'Sin Resultados',
        message: 'Todavía no has realizado ningún test',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  getItems(ev: any) {

    if (this.listaResultadosTemp != null && this.listaResultadosTemp != undefined){
      // Reset items back to all of the items
      this.listaResultados = this.listaResultadosTemp;

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.listaResultados = this.listaResultados.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.Tema.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  // do(item){
  //   this.navCtrl.push(DoTestPage, {item: item});
  // }

  // repeat(item){
  //   const confirm = this.alertCtrl.create({
  //     title: 'Repetir Test',
  //     message: '¿Deseas volver a hacer este test?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: () => {
  //           //console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Si',
  //         handler: () => {
  //           this.navCtrl.push(DoTestPage, {test: item, numMinutos: this.numMinutos, numPreguntas: this.numPreguntas});
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();    
  // }
  
  // logout()
  // {
  //   // const root = this.app.getRootNav();
  //   // root.popToRoot();
  //   this.proveedorLogout.logout()
  //   this.navCtrl.setRoot(LoginPage);
  // }

}
