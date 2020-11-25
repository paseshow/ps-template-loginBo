import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '@models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean;
  intentoLogin: boolean;
  loginErrorNoVerificado: boolean;
  existeEmail: boolean;
  hide = true;
  mensajeLoginError = '';
  mensajeErrorNoVerificado = '';

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    public title: Title,
    private matSnackBar: MatSnackBar
  ) {
    this.loginError = false;
    this.existeEmail = false;
  }

  ngOnInit() {
    localStorage.clear();
    this.buildForm();
    this.title.setTitle('Paseshow Tickets');
    this.intentoLogin = false;
  }

  buildForm() {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginUsuario(): void {
    this.intentoLogin = true;
    this.loginErrorNoVerificado = false;
    this.loginError = false;

    this.loginForm.get('username').markAsTouched();
    this.loginForm.get('password').markAsTouched();

    this.matSnackBar.open('Esperá un momento...', 'Cargando', { duration: 2000 });

    if (this.loginForm.valid) {
      this._loginService
        .login({
          username: this.loginForm.value['username'].toLowerCase(),
          password: this.loginForm.value['password']
        })
        .subscribe(
          (res) => {
            this._router.navigate(['admin']);
            this.validarUsuarioYRedirigir();
          },
          (error) => {
            this.loginForm.patchValue({ password: '' });
            this.loginError = true;
            this.mensajeLoginError = 'DNI o contraseña incorrecta';
          }
        );
    } else {
      this.loginError = true;
    }
  }

  validarUsuarioYRedirigir() {
    const usuario: Usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario) {
      if (usuario.dni) {
        this._router.navigate(['admin']);
      } else {
        this._router.navigate(['admin']);
      }
    }
  }

}
