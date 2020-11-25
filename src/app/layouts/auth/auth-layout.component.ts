import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  styles: [':host /deep/ .mat-sidenav-content {width:100%; height:100%; padding: 0; ' +
    'background: url("./assets/images/login-fondo.png") no-repeat;height: 100%;background-size: cover;} ' +
    '.mat-sidenav-container {z-index: 1000; width:100%; height:100%;}  '],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent { }
