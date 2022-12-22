import { Component } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { Platform } from '@ionic/angular';
import { initialize } from '@ionic/core';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform, private services: PushService) { 
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.services.configInicial();
    })

  }
}

