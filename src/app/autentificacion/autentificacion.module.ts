import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// import { SharedModule } from './../shared/shared.module';
import { AutentificacionRoutes } from './autentificacion.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    RouterModule.forChild(AutentificacionRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
  ]
})

export class AutentificacionModule { }
