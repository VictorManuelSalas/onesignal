import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    {
      title: 'Titulo de la push',
      body: 'Body de la push',
      date: new Date()
    }
  ];
  signal_app_id = '8d1620a0-bc08-4ab2-9a79-3ffb5aee82a6';
  firebase_id = '135841084689';

  constructor(private oneSignal: OneSignal) { }

  configInicial() {
    this.oneSignal.startInit(this.signal_app_id, this.firebase_id);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      // do something when notification is received
      alert(data)
      this.notificacionRecibida( data );
    });

    this.oneSignal.handleNotificationOpened().subscribe((info) => {
      // do something when a notification is opened
      alert(info)
    });

    this.oneSignal.endInit();
  }

  notificacionRecibida(data: any){
    const payload = data.payload;
    const existepush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);

    if (existepush) {
      return;
    }
    this.mensajes.unshift( payload );
  }
}
