import { Token } from './token';
import { User } from 'src/app/user/user';
import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, JSON.stringify(token));
    }

    getToken() {
      const token = JSON.parse(window.localStorage.getItem(KEY)) as Token;
      return token;
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}
