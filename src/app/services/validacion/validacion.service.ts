import { Injectable } from '@angular/core';

@Injectable()
export class ValidacionService {

  public monedaPattern = '^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,4})?$';


  static obtenerValidacionMensajeError(validatorName: string, validatorValue?: any) {

    const config = {
      'required': 'Campo Requerido',
      'tarjetaCreditoInvalida': 'Tarjeta de Credito Inválida',
      'emailInvalido': 'Email Inválido',
      'passwordInvalida': 'Contraseña Inválida. La misma debe tener 6 caracteres como minimo y contener al menos 1 número.',
      'minlength': `Este campo debe tener al menos ${validatorValue ? validatorValue.requiredLength : 'NaN'} caracteres`,
      'cuitInvalido': 'Cuit invalido',
      'cbuInvalida': 'CBU invalida',
      'dniInvalido': 'DNI invalido',
      'existeEmailUsuario': 'El email ya existe',
      'telefonoInvalido': 'Teléfono Invalido',
      'noExisteEmailUsuario': 'El email no existe'
    };

    return config[validatorName];
  }


  static obtenerMascara(nombreMascara: string) {
    switch (nombreMascara.trim().toLowerCase()) {
      case 'dni': return [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
      case 'fecha': return [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
      case 'cuit': return [/[2-3]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
      case 'cbu': return [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/,
        /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
    }
  }

  static tarjetaDeCredito(control: any) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value) {
      // tslint:disable-next-line:max-line-length
      if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
        return null;
      } else {
        return { 'tarjetaCreditoInvalida': true };
      }
    }
  }

  static email(control: any) {
    // RFC 2822 compliant regex
    if (control.value) {
      if (
        // tslint:disable-next-line:max-line-length
        control.value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
        return null;
      } else {
        return { 'emailInvalido': true };
      }
    }
  }

  static password(control: any) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value) {
      if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return null;
      } else {
        return { 'passwordInvalida': true };
      }
    }
  }

  static cuit(control: any) {
    // Esta expresión regular sirve para validar números de CUIT / CUIL de Argentina.
    if (control.value) {
      if (control.value.match(/^[0-9]{2}-[0-9]{8}-[0-9]$/)) {
        return null;
      } else {
        return { 'cuitInvalido': true };
      }
    }
  }

  static telefono(control: any) {
    if (control.value) {
      if (control.value.match(/^(?=.*?[1-9()+])[0-9+() -]+$/)) {
        return null;
      } else {
        return { 'telefonoInvalido': true };
      }
    }
  }


  static cbu(control: any) {
    // Esta expresión regular sirve para validar números de cbu de Argentina.
    if (control.value) {
      if (control.value.match(/^[0-9]{22}$/)) {
        return null;
      } else {
        return { 'cbuInvalida': true };
      }
    }
  }

  static dni(control: any) {
    // Esta expresión regular sirve para validar números de dni de Argentina.
    if (control.value) {
      if (control.value.match(/^[0-9]{8}$/)) {
        return null;
      } else {
        return { 'dniInvalido': true };
      }
    }
  }

}


