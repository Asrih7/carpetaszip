import { Component, Input, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-test-index',
  templateUrl: './test-index.page.html',
  styleUrls: ['./test-index.page.scss'],
})
export class TestIndexPage implements OnInit {
  
  @Input() swiper: SwiperComponent;
  @Input() preguntas: any;

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  goTo(idPregunta: number) {
    this.swiper.swiperRef.slideTo(idPregunta-1, 500);
    this.swiper.updateSwiper({});
    this.popoverCtrl.dismiss();
  }

}
