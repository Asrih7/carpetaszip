import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';
import { AppConfig } from  '../../../app/app.config';
import { Fancybox } from '@fancyapps/ui';
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

  navParams: any;
  titulo: string;
  id: string;
  url: string;
  //navParams: any;

  constructor(private router: Router, private navParamService: NavparamService, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private streamingMedia: StreamingMedia) { 

    // this.navParams = this.navParamService.getNavData();
    // this.titulo = this.navParams['titulo'];
    // this.url = this.navParams['url'];
    
    //this.url = this.navParamService.getNavData();

    this.navParams = JSON.parse(this.navParamService.getNavData());

    this.titulo = this.navParams['titulo'];
    this.id = this.navParams['id'];
    //this.url = this.navParams['url'];
    this.getUrl();

    //this.playMedia();

    //this.item = this.navParamService.getNavData();
    //this.obtenerUrl();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //this.playMedia();
  }

  playMedia() {

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      //orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };
    
    this.streamingMedia.playVideo(this.url, options);
  }

  getUrl(){
      //this.url = "http://demo.aulavirtualctp.com/Academias/Cursos/ReproductorVideoMobile.aspx?idVideo="+ this.item.URL;
      this.url = "https://demo.aulavirtualctp.com/Academias/Cursos/ReproductorVideoMobile.aspx?idVideo="+ this.id;
  }

}
