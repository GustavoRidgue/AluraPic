import { TokenService } from './token.service';
import { Token } from './token';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

const API_URL = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy {
  navigationSubscription
  token: Token;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private router: Router,
    private http: HttpClient) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.token = null;
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // this._document.defaultView.location.reload();
  }

  async authenticate(username: string, password: string) {
    try {
      let data: Token = await this.http.post<any>(API_URL + '/user/signIn', {username, password}).toPromise();
      return data;
    } catch (e) {
      return null;
    }
  }

  // authenticate(username: string, password: string) {
  //   this.http.post<any>(
  //     API_URL + '/user/signIn',
  //     {username, password}
  //   )
  //   .subscribe(
  //     t => this.token = t
  //   );
  //   return this.token;
  // }
}

























// if (this.user) {
    //   if (this.user.password === password) {

    //     return this.http.post(
    //       API_URL + '/user/signIn',
    //       {username, password}
    //       // {observe: 'response'}
    //     );
    //     // .pipe(tap(res => {
    //       // const authToken = res.headers.get('x-access-token');
    //       // console.log(authToken);
    //     // }))
    //   }
    // }
























// getUserByName(username: string): Observable<User> {
//   // 5
//   // Retorna lista de usuário pelo nome porque EU NÃO ESTOU USANDO A API DO INSTRUTOR, e sim o Typicode com Json-server
//   return this.http.get<User>(API_URL + '/user/name/' + username);
// }

// getToken(username: string): Observable<User> {
//   // 5
//   // Retorna lista de usuário pelo nome porque EU NÃO ESTOU USANDO A API DO INSTRUTOR, e sim o Typicode com Json-server
//   return this.http.get<User>(API_URL + '/user/name/' + username);
// }

// authenticate(username: string, password: string) {
//   // 4
//   // Eu chamo a function de buscar o usuário, e retorna uma lista com apenas um registro

//   // 6
//   // Então eu descarrego os dados na variável arrayUser
//   // this.getUserByName(username)
//   // .subscribe(u => this.arrayUser = u);
//   this.getUserByName(username)
//   .subscribe(u => this.user = u);

//   // console.log('Valor do arrayUser após receber retorno do getUserByName(): ' + this.arrayUser + '\n');

//   // 7
//   // A variável arrayUser é agora uma lista de 1 objeto de usuário
//   // Então eu preciso fazer essa converção para que se torne um objeto
//   // Então aqui eu tô convertendo esse array com um objeto para um objeto
//   // this.user = this.arrayUser.reduce(
//     // (obj, item) => Object.assign(obj, { id: item.id, username: item.username, password: item.password }), {});

//   // console.log('Username digitado: ' + username + ', Senha digitada: ' + password + '\nId do user: ' + this.user.id + ', Username do user: ' + this.user.username + ', Senha do user: ' + this.user.password + '\n');

//   // 8
//   // Valida de a senha do user encontrado for a mesma do campo digitado
//   if (this.user) {
//     if (this.user.password === password) {
//       // Retorna o usuário
//       this.http.post<string>(API_URL + '/user/signIn', {username, password}, {observe: 'response'});
//       return this.user;
//     }
//   }
// }






















// import { User } from 'src/app/user/user';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Injectable, Input } from '@angular/core';

// const API_URL = 'http://localhost:3000'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   user: User;

//   constructor(private http: HttpClient) { }

//   getUserByName(userId: number): Observable<User> {
//     console.log('getUserByName')
//     return this.http.get<User>(API_URL + '/user/' + userId);
//   }

//   authenticate(userId: number, password: string) {
//     this.getUserByName(userId)
//     .subscribe(u => this.user = u);

//     console.log(this.user);
//     console.log(this.user);
//     console.log(password);

//     if (this.user.password === password) return true;
//     else return false;

//     // console.log(this.user);

//     // return this.http.post(API_URL + '/user/login', {username, password});
//   }
// }
