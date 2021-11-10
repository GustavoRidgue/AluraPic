import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080/api'

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

    signup(newUser) {
        return this.http.post(API_URL + '/user/signUp', newUser);
    }
}
