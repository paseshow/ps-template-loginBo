import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ValidacionService } from '../services/validacion/validacion.service';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from './accordion';
import { ControlValidacionComponent } from './control-validacion/control-validacion.component';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule, //
    MatProgressSpinnerModule,  //
    MatTooltipModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    //PintarButacasDirective,
    ControlValidacionComponent,
    SubirArchivoComponent
  ],
  exports: [
    SubirArchivoComponent,
    AccordionAnchorDirective, //
    AccordionLinkDirective, //
    AccordionDirective, //
    ControlValidacionComponent, //
    CommonModule, //
    MatButtonModule, //
    MatProgressSpinnerModule, //
    FlexLayoutModule, //
    MatSnackBarModule, //
  ],
  providers: [ValidacionService]
})
export class SharedModule {
}
