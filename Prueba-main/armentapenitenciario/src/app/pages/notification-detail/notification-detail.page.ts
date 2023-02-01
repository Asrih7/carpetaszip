import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavparamService } from 'src/app/services/navparam.service';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {

  idCurso: number;
  notificacion: any;
  usuario: any = [];
  items: any[];

  constructor(private router: Router, private navParamService: NavparamService) { 

    this.notificacion = this.navParamService.getNavData();

  }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.notificacion = params['notificacion'];
    // });

    // this.activatedRoute.paramMap.subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )

    //this.notificacion = this.activatedRoute.snapshot.paramMap.get('notificacion');
    //this.notificacion = this.navParamService.getNavData();

    // if (this.notificacion === null)
    // {
    //   console.log('sin datos');
    //   this.router.navigate(['/home']);
    // }
    
  }

}
