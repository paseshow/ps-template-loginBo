import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ps-tickets-web';
  onlineOffline: boolean = navigator.onLine;
  mensajeErrorConexion: any;
  mensajeReconexion: any;

  constructor() {
    this.mensajeErrorConexion = {
      type: 'error',
      title: 'Cuidado!',
      body: 'Se perdió la conexión',
      showCloseButton: true,
      timeout: 0
    };
    this.mensajeReconexion = {
      type: 'success',
      title: 'Que suerte!',
      body: 'Se recuperó la conexión',
      showCloseButton: true,
      timeout: 2000
    };
    window.addEventListener('online', () => {
      this.onlineOffline = true;
      console.info(this.mensajeReconexion);
    });
    window.addEventListener('offline', () => {
      this.onlineOffline = false;
      console.warn(this.mensajeErrorConexion);
    });
  }
}
