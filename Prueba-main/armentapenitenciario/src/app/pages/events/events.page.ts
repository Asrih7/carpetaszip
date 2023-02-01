import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { LogoutProvider } from '../../providers/logout';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  usuario: any = [];
  items: any[];
  allitems: any[];
  // itemsMisEventos: any[];
  // allitemsMisEventos: any[];
  titulo: string;
  comentario: string;
  searchQuery: string = '';
  searchQueryMisEventos: string = '';
  eventos: string = "eventos";
  misEventos: string = "misEventos";
  currentDate = new Date();

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public proveedorLogout: LogoutProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    if (this.searchQuery == ''){
      this.initializeItems();
    }

  }

  async initializeItems() {

    const loading = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    await loading.present();

    // Se obtienen los datos del usuario de la memoria
    this.storage.get('usuario').then((val) => {
      if (val != null && val != undefined){
        this.usuario = JSON.parse(val);

        this.proveedor.consultarEventos(this.usuario.Mensaje.AuthorizationToken)
        .subscribe(
          //(data)=>{this.tests = data;},
          (data)=>{this.parseJson(data);},
          (error)=>{console.log(error);},
          () =>{loading.dismiss()}
        )
      }
      else{
        // Si no se han recuperado los datos se vuelve a la página de login
        this.proveedorLogout.logout();
      }
    });
  }

  parseJson(data)
  {
    //console.log(data);

    if (data.Error == 0){
      let jsonArray = data.Mensaje;

      this.items = [];
      this.allitems = [];
      // this.itemsMisEventos = [];
      // this.allitemsMisEventos = [];

      if (jsonArray.length > 0){
        for(let i=0; i < jsonArray.length; i++)
        {
          let jsonObject = jsonArray[i];
          this.items.push(jsonObject);
          this.allitems.push(jsonObject);
          // this.itemsMisEventos.push(jsonObject);
          // this.allitemsMisEventos.push(jsonObject);
        }
      }
      else{
        //this.alert('Sin Eventos', 'Permanece atento a los próximos eventos del centro');
      }
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout();
    }
    else{
      this.items = [];
      // this.itemsMisEventos = [];
      //this.alert('Sin Eventos', 'Permanece atento a los próximos eventos del centro');
    }
  }

  getItems(ev: any) {

    if (this.allitems != null && this.allitems != undefined){
      // Reset items back to all of the items
      this.items = this.allitems;

      this.searchQuery = '';

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.searchQuery = val;
        this.items = this.items.filter((item) => {
          return ((item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.FechaInicioEvento.toLowerCase().indexOf(val.toLowerCase()) > -1));
        })
      }
    }
  }

  // getItemsMisEventos(ev: any) {

  //   if (this.allitemsMisEventos != null && this.allitemsMisEventos != undefined){
  //     // Reset items back to all of the items
  //     this.itemsMisEventos = this.allitemsMisEventos;

  //     this.searchQueryMisEventos = '';

  //     // set val to the value of the searchbar
  //     const valMisEventos = ev.target.value;

  //     // if the value is an empty string don't filter the items
  //     if (valMisEventos && valMisEventos.trim() != '') {
  //       this.searchQueryMisEventos = valMisEventos;
  //       this.itemsMisEventos = this.itemsMisEventos.filter((item) => {
  //         return ((item.Nombre.toLowerCase().indexOf(valMisEventos.toLowerCase()) > -1) || (item.FechaInicioEvento.toLowerCase().indexOf(valMisEventos.toLowerCase()) > -1));
  //       })
  //     }
  //   }
  // }

  info(descripcion: string){    
    //this.navCtrl.push(TestInfoPage, {idTest: this.test.IdTest});
    this.alert('Información', descripcion);
  }

  meApunto(idEvento: number, codigo: string){

    // Se valida e inscribe al usuario en el evento
    this.proveedor.validarAsociarEvento(this.usuario.Mensaje.AuthorizationToken, idEvento, codigo)
    .subscribe(
      (data)=>{this.eventoValidadoAsociado(data);},
      (error)=>{console.log(error);}
    )     
  }

  eventoValidadoAsociado(data: any){

    if (data.Error == 0){
      this.alert('¡Enhorabuena!', 'Te has apuntado al evento');
      this.initializeItems();
    }
    // Acceso denegado
    else if (data.Error == -10){
      // this.proveedorLogout.logout();
      this.proveedorLogout.logout()
    }
    // Aforo completo
    else if (data.Error == -20){
      this.alert('Aforo Completo', data.Mensaje);
    }
    // Plazo finalizado
    else if (data.Error == -30){
      this.alert('Plazo Finalizado', data.Mensaje);
    }
    // Límite superado
    else if (data.Error == -40){
      this.alert('Límite Superado', data.Mensaje);
    }
    else{
      this.items = [];
      this.alert('Error', 'Lo sentimos, ha ocurrido un error y no has podido ser apuntado en el evento. Por favor, inténtalo más tarde');
    }
  }

  /********************* ANTIGUA FORMA DE VALIDAR LOS EVENTOS, AHORA SE HACE TODO EN SERVIDOR *********************/ 

  // meApunto(codigo: string, fechaFinEvento: DateTime, fechaHoy: DateTime){
  
  //     // var myDate = new Date().toISOString();

  //     // var date = new Date();
  //     // let latest_date =this.datePipe.transform(date, 'yyyy-MM-dd');

  //     // let latest_fin =this.datePipe.transform(fechaFinEvento, 'yyyy-MM-dd');

  //     // console.log('Fecha Hoy ISO:' + myDate);
  //     //console.log('Fecha Hoy (rest):' + fechaHoy);
  //     // console.log('Fecha Hoy (ionic):' + latest_date);
  //     //console.log('Fecha Fin (rest):' + fechaFinEvento);
  //     // console.log('Fecha Fin (ionic):' + latest_fin);
  //     // console.log('Fecha Hoy (segundos):' + Date.parse(myDate));
  //     // console.log('Fecha Fin (segundos):' + Date.parse(fechaFinEvento.toString()));

  //     // Si ha terminado el plazo de inscripción
  //     if (fechaFinEvento != null && fechaFinEvento < fechaHoy){
  //       const alert = this.alertCtrl.create({
  //         title: 'Plazo Finalizado',
  //         message: 'Lo sentimos, el plazo de inscripción al evento ha finalizado y ya no puedes apuntarte', 
  //         buttons: ['OK']
  //       });
  //       alert.present();
  //     }
  //     // Si no ha terminado el plazo de inscripción
  //     else{
  //       this.inscribirUsuario(codigo);
  //     }
  // }

  // inscribirUsuario(codigo: string)
  // {
  //     // const loader = this.loadingCtrl.create({
  //     //   content: "Solicitando acceso..."
  //     // });
  //     // loader.present();

  //     // Se inscribe al usuario en el evento
  //     this.proveedor.asociarEvento(this.usuario.Mensaje.AuthorizationToken, codigo)
  //     .subscribe(
  //       //(data)=>{console.log(data);},
  //       (data)=>{this.eventoAsociado(data);},
  //       (error)=>{console.log(error);}
  //       //() =>{loader.dismiss()}
  //     )     
  // }

  // eventoAsociado(data: any){

  //   if (data.Error == 0){

  //     const alert = this.alertCtrl.create({
  //       title: '¡Enhorabuena!',
  //       subTitle: 'Te has apuntado al evento',
  //       buttons: ['OK']
  //     });
  //     alert.present();

  //     this.initializeItems();
  //   }
  //   // Acceso denegado
  //   else if (data.Error == -10){
  //     this.proveedorLogout.logout();
  //   }
  //   else{
  //     this.items = [];
  //     const alert = this.alertCtrl.create({
  //       title: 'Error',
  //       subTitle: 'Lo sentimos, ha ocurrido un error y no has podido ser apuntado en el evento. Por favor, inténtalo más tarde',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  // }

  /****************************************************************************************************************/

  async borrar(idEvento: number, fechaFinEvento: Date, fechaHoy: Date){

    // Si ha terminado el plazo de inscripción
    if (fechaFinEvento != null && fechaFinEvento < fechaHoy){
      this.alert('Plazo Finalizado', 'Lo sentimos, una vez finalizado el plazo de inscripción al evento ya no puedes darte de baja');      
    }
    // Si no ha terminado el plazo de inscripción
    else{
      const confirm = await this.alertCtrl.create({
        header: 'Baja del Evento',
        message: 'Vas a darte de baja en este evento y tu plaza quedará libre para otro alumno. <br/><br/> ¿Deseas darte de baja?',
        buttons: [
          {
            text: 'No',
            handler: () => {

            }
          },
          {
            text: 'Si',
            handler: () => {
              this.borrarUsuario(idEvento);            
            }
          }
        ]
      });
      await confirm.present();
    }
  }

  borrarUsuario(idEvento: number){

    // const loader = this.loadingCtrl.create({
    //   content: "Tramitando baja..."
    // });
    // loader.present();

    // Se eliminar al usuario en el evento
    this.proveedor.desasociarEvento(this.usuario.Mensaje.AuthorizationToken, idEvento)
    .subscribe(
      //(data)=>{console.log(data);},
      (data)=>{this.eventoDesasociado(data);},
      (error)=>{console.log(error);}
      //() =>{loader.dismiss()}
    ) 
  }


  eventoDesasociado(data: any){

    if (data.Error == 0){
      this.alert('Baja completada', 'Has sido eliminado del evento');
      this.initializeItems();
    }
    // Acceso denegado
    else if (data.Error == -10){
      this.proveedorLogout.logout();
    }
    else{
      this.items = [];
      this.alert('Error', 'Lo sentimos, ha ocurrido un error y no has podido ser eliminado en el evento. Por favor, inténtalo más tarde');
    }
  }

  completo(){
    this.alert('Aforo Completo', 'Lo sentimos, actualmente no quedan plazas libres en este evento');
  }

  apuntado(){
    this.alert('Apuntado', 'Ya estás apuntado a este evento');
  }

  segmentChanged(ev: any) {
    switch(ev.detail.value)
    {
      case 'eventos':
        this.items = this.allitems;
        break;
      case 'misEventos':
        this.items = this.allitems;
        this.items = this.items.filter((item) => {
          return ((item.Apuntado == true));
        })
        break;
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

  volver(){
    this.router.navigate(['/tabs/tab1']);
  }

}
