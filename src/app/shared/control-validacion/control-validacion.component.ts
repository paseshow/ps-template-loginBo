import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidacionService } from '@services/validacion/validacion.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'control-validacion',
  template: `<span class="text-danger text-muted" *ngIf="errorMessage !== null">{{ errorMessage }}</span>`
})
export class ControlValidacionComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidacionService.obtenerValidacionMensajeError(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}


