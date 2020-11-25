import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '@models/usuario';


@Injectable()
export class LoginService {
    constructor(public http: HttpClient) { }

    agregarHeadersLogin(): HttpHeaders {
        const headers = new HttpHeaders();
        return headers;
    }

    login(credencial: any): Observable<boolean> {
        this.borrarCredenciales();
        let usuario;
        if (credencial.username.search('@') !== -1) {
            usuario = { email: credencial.username, password: credencial.password };
        } else {
            usuario = { dni: credencial.username, password: credencial.password };
        }

        const body = new HttpParams()
            .set('username', credencial.username)
            .set('password', credencial.password);

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const options = { headers: headers };

        return this.http
            .post(environment.apiUrl + 'usuarios/authenticate', body.toString(), options)
            .pipe(
                map((data: any) => {
                    this.guardarCredenciales(data);
                    return true;
                })
            );
    }

    borrarCredenciales() {
        if (localStorage.length > 0) {
            localStorage.clear();
        }
    }

    guardarCredenciales(datosToken: any) {
        localStorage.setItem('tokenStream', datosToken.accessToken);
        localStorage.setItem('tokenType', datosToken.tokenType);
    }

    public crearUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(environment.apiUrl + 'Usuarios', JSON.stringify(usuario));
    }

    logout(): Observable<any> {
        return this.http.post(environment.apiUrl + 'Usuarios/logout', '').pipe(
            map((res) => {
                localStorage.clear();
            }),
            catchError(this.handleErrors)
        );
    }

    handleErrors(error: any) {
        localStorage.clear();
        return error;
    }

}