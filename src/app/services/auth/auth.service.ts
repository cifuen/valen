import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUser = false;

  login () {
    this.loginUser = true;
  }

  cerrarSesion () {
    this.loginUser= false;
    console.log(this.cerrarSesion());
  }

  autenticacionUser () {
    this.loginUser = this.loginUser;
    console.log(this.autenticacionUser());
  }

  constructor() { }
}
