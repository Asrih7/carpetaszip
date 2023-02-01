import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  darkMode = false;
  isPostBack = false;
  
  constructor(private themeService: ThemeService, private storage: Storage) { 
  }

  ngOnInit() {
    this.storage.get('selected-app-theme').then(theme => {
      this.darkMode = theme;
    });
  }

  ionViewDidEnter(){    
    this.isPostBack = true;
  }

  toggleDarkMode() {    
    if (this.isPostBack)
      this.themeService.toggleAppTheme();
  }

  notifications() {
    
  }

}

