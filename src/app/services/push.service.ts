import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  signal_app_id = '8d1620a0-bc08-4ab2-9a79-3ffb5aee82a6';
  firebase_id = '135841084689';

  constructor(private oneSignal: OneSignal) { }

  configInicial() {
    this.oneSignal.startInit(this.signal_app_id, this.firebase_id);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      // do something when notification is received
      alert(data)
    });

    this.oneSignal.handleNotificationOpened().subscribe((info) => {
      // do something when a notification is opened
      alert(info)
    });

    this.oneSignal.endInit();
  }
}
