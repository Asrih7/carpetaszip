import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { MenuController} from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AulavirtualrestProvider } from '../../providers/aulavirtualrest';
import { TestIndexReviewPage } from '../test-index-review/test-index-review.page';
import { Storage } from '@ionic/storage-angular';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Virtual, Pagination, Scrollbar, EffectCube } from 'swiper';
import {IonicSlides} from '@ionic/angular';

// install Swiper modules https://swiperjs.com/angular#virtual-slides
SwiperCore.use([Virtual]);

// SwiperCore.use([Pagination, Scrollbar, EffectCube, IonicSlides]);
@Component({
  selector: 'app-test-review',
  templateUrl: './test-review.page.html',
  styleUrls: ['./test-review.page.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class TestReviewPage implements AfterContentChecked {
  
  @ViewChild('swiper') swiper: SwiperComponent;

  // config: SwiperOptions = {
  //   pagination: false,
  //   scrollbar: false,
  //   //centeredSlides: true,
  //   //effect: 'cube',
  // };

  resultado: string = "resultado";
  revision: string = "revision";
  comparativa: string = "comparativa";
  ranking: string = "ranking";
  idOposicion: number;
  test: any;
  tipoTest: number;
  listaPreguntas: any[];
  listaRespuestas: any[];
  numeroPreguntas: any;
  numeroRespuestasCorrectas: number = 0;
  aciertos: number;
  fallos: number;
  blancos: number;
  dudosas: number;
  dudosasAcierto: number;
  dudosasFallo: number;
  nota: number;
  notaRiesgo: number;
  valorFallo: number;
  mediaAlumnos: number;
  comentario: string;
  motivo: string;
  usuario: any = [];
  origen: any[];
  etiqueta: string;
  revisar: boolean;
  navParams: any;

  constructor(private router: Router, private navParamService: NavparamService, public proveedor: AulavirtualrestProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage, public popoverCtrl: PopoverController, private menu: MenuController) { 

    this.navParams = JSON.parse(this.navParamService.getNavData());

    this.idOposicion = this.navParams['idOposicion'];
    this.test = this.navParams['test'];
    this.tipoTest = this.navParams['tipoTest'];
    this.listaPreguntas = this.navParams['listaPreguntas'];
    this.listaRespuestas = this.navParams['listaRespuestas'];
    this.numeroPreguntas = this.listaPreguntas.length;
    this.aciertos = this.navParams['aciertos'];
    this.fallos = this.navParams['fallos'];
    this.blancos = this.navParams['blancos'];
    this.dudosas = this.navParams['dudosas'];
    this.dudosasAcierto = this.navParams['dudosasAcierto'];
    this.dudosasFallo = this.navParams['dudosasFallo'];
    this.nota = this.navParams['nota'] == 10 ? 10 : (this.navParams['nota'] == 0 ? 0 : this.navParams['nota']);
    this.notaRiesgo = this.navParams['notaRiesgo'] == 10 ? 10 : (this.navParams['notaRiesgo'] == 0 ? 0 : this.navParams['notaRiesgo']);
    this.valorFallo = this.navParams['valorFallo'];
    this.mediaAlumnos = this.navParams['mediaAlumnos'] == 10 ? 10 : this.navParams['mediaAlumnos'];
    this.origen = this.navParams['origen'];
    this.etiqueta = this.navParams['etiqueta'];
    this.revisar = this.navParams['revisar'];

  }

  ngAfterContentChecked(): void {
    // if (this.swiper) {
    //   this.swiper.updateSwiper({});
    // }
  }

  swiperSlideChanged(e) {
    //console.log('changed: ', e);
    //this.swiper.updateSwiper;
  }

  async terminar(){
    const confirm = await this.alertCtrl.create({
      header: 'Terminar Revisión',
      message: '¿Seguro que deseas terminar la revisión?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Si',
          handler: () => {             
            if (this.origen != null){
              //this.navCtrl.push(ModuleDetailPage, {modulo: this.origen});
              this.navParamService.setNavData(this.origen);
              this.router.navigate(['/module-detail']);
            }
            else if (this.etiqueta != null)
            {
              this.navParamService.setNavData(this.etiqueta);

              if (this.etiqueta === 'Simulacros')
                this.router.navigate(['/test']);
              else
                this.router.navigate(['/specific-content']);
            }
            else
            {
              //this.router.navigate(['/test']);  
              this.router.navigate(['/tabs/test']);

              // no sirve porque recarga la página y perdemos el menú
              // this.router.navigate(['/tabs/test'])
              // .then(() => {
              //   window.location.reload();
              // });
            }        
          }
        }
      ]
    });
    await confirm.present();
  }

  async explicacion(explicacion: string) {
    const alert = await this.alertCtrl.create({
      header: 'Explicación',
      message: explicacion,
      buttons: ['Entendido']
    });
    await alert.present();
  }

  prev()
  {
    this.swiper.swiperRef.slidePrev(500);
  }

  next()
  {
    this.swiper.swiperRef.slideNext(500);
  }

  goTo(position: number)
  {
    this.swiper.swiperRef.slideTo(position, 500);
  }

  async infoDudosa()
  {
    const alert = await this.alertCtrl.create({
      header: 'Pregunta Dudosa',
      message: 'Marcaste esta pregunta como dudosa',
      buttons: ['OK']
    });
    await alert.present();
  }

  async nuevoComentario(posicion: number, idPregunta: number) {

    const prompt = await this.alertCtrl.create({
      header: 'Enviar Comentario',
      message: "Escribe tu comentario sobre esta pregunta:",
      inputs: [
        {
          name: 'mensaje',
          placeholder: 'Mensaje',
          max: '1000'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            // console.log('Cancel clicked');            
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.comentario = data.mensaje;
            this.insertarComentarioPregunta(posicion, idPregunta);
          }
        }
      ]
    });
    await prompt.present();
  } 

  async insertarComentarioPregunta(posicion: number, idPregunta: number)
  {
    if (this.comentario != ""){
        const loading = await this.loadingCtrl.create({
          message: "Enviando...",
          duration: 500
        });
        await loading.present();

        // Se obtienen los datos del usuario de la memoria
        this.storage.get('usuario').then((val) => {
        if (val != null && val != undefined){
          this.usuario = JSON.parse(val);

          this.proveedor.comentarPregunta(this.usuario.Mensaje.AuthorizationToken, this.test.IdTest, idPregunta, posicion, this.comentario)
          .subscribe(
            //(data)=>{this.tests = data;},
            (data)=>{this.comentarioEnviado(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
      }); 
    }
    else{
      const alert = await this.alertCtrl.create({
        header: 'ATENCIÓN',
        message: 'Debes introducir el mensaje para enviar tu comentario',
        buttons: ['OK']
      });
      await alert.present();
    }

  }

  async comentarioEnviado(data: any){
    const alert = await this.alertCtrl.create({
      header: 'Comentario Enviado',
      message: data.Mensaje,
      buttons: ['OK']
    });
    await alert.present();

    // console.log(data);
  }

  async impugnarPregunta(posicion: number, idPregunta: number) {
    const prompt = await this.alertCtrl.create({
      header: 'Impugnar pregunta',
      message: "Explica el motivo de impugnación de esta pregunta:",
      inputs: [
        {
          name: 'motivo',
          placeholder: 'Motivo',
          max: '1000'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            // console.log('Cancel clicked');            
          }
        },
        {
          text: 'Impugnar',
          handler: data => {
            this.comentario = data.motivo;
            this.insertarImpugnacionPregunta(posicion, idPregunta);
          }
        }
      ]
    });
    prompt.present();
  } 

  async insertarImpugnacionPregunta(posicion: number, idPregunta: number)
  {
    if (this.comentario != ""){
        const loading = await this.loadingCtrl.create({
          message: "Enviando..."
        });
        await loading.present();

        // Se obtienen los datos del usuario de la memoria
        this.storage.get('usuario').then((val) => {
        if (val != null && val != undefined){
          this.usuario = JSON.parse(val);

          this.proveedor.impugnarPregunta(this.usuario.Mensaje.AuthorizationToken, this.test.IdTest, idPregunta, posicion, this.comentario)
          .subscribe(
            //(data)=>{this.tests = data;},
            (data)=>{this.preguntaImpugnada(data);},
            (error)=>{console.log(error);},
            () =>{loading.dismiss()}
          )
        }
        // else{
        //   // Si no se han recuperado los datos se vuelve a la página del foro
        //   this.navCtrl.push(ForoPage);
        // }
      }); 
    }
    else{
      const alert = await this.alertCtrl.create({
        header: 'ATENCIÓN',
        message: 'Debes introducir el motivo para enviar tu impugnación',
        buttons: ['OK']
      });
      await alert.present();
    }

  }

  async preguntaImpugnada(data: any){
    const alert = await this.alertCtrl.create({
      header: 'Impugnación Enviada',
      message: data.Mensaje,
      buttons: ['OK']
    });
    await alert.present();

    // console.log(data);
  }

  async verIndice(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: (TestIndexReviewPage),
      componentProps: {preguntas: this.listaPreguntas, swiper: this.swiper},
      event: ev,
      translucent: true
    });
    await popover.present();
        
  }

  openMenu() {
    this.menu.enable(true, 'indicePreguntasPreview');
    this.menu.open('indicePreguntasPreview');
  }

  closeMenu() {
    this.menu.close('indicePreguntasPreview');
  }

}
