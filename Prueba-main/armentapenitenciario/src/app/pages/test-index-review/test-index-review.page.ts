import { Component, Input, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-test-index-review',
  templateUrl: './test-index-review.page.html',
  styleUrls: ['./test-index-review.page.scss'],
})
export class TestIndexReviewPage implements OnInit {

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
