import { Token } from './../core/auth/token';
import { Injectable, OnInit } from '@angular/core';
import { TokenService } from '../core/auth/token.service';
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private tokenService: TokenService, private datePipe: DatePipe) { }

    getToken() {
      return this.tokenService.getToken();
    }

    setToken(token: Token) {
        this.tokenService.setToken(token);
    }

    hasToken() {
      return this.tokenService.getToken();
    }

    isTokenAvaliable() {
      if (this.hasToken()) {
        const token = this.getToken();

        const date: Date = new Date();

        let todayString = this.datePipe.transform(date.getTime(),"yyyy-MM-dd hh:mm:ss");
        let expirationSring = this.datePipe.transform(token.expiration,"yyyy-MM-dd hh:mm:ss");

        let today = new Date(todayString);
        let expiration = new Date(expirationSring);

        if (expiration.getTime() < today.getTime() || expiration.getTime() == today.getTime()) {
          this.tokenService.removeToken();
          return false;
        }

        return true;
      }
      return false;
    }

    isLogged() {
      return this.isTokenAvaliable();
    }

    getUser() {
      if (this.isTokenAvaliable()) return this.getToken().user;
    }

    logout() {
      this.tokenService.removeToken();
    }
}
