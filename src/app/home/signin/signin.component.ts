import { UserService } from './../../user/user.service';
import { Token } from '../../core/auth/token';
import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  @ViewChild('passwordInput') el:ElementRef;
  showLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    @Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    this.showLoading = true;

    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    let token: Token = await this.authService.authenticate(username, password);

    if(token != null) {
      this.userService.setToken(token);
      this.router.navigateByUrl('/photos');
      this._document.defaultView.location.reload();
    } else {
      this.platformDetectorService.isPlatformBrowser() && this.el.nativeElement.focus();
      alert('Invalid user name or password. Try it again');
    }

    this.showLoading = false
  }

  // login() {
  //   let token: Token;

  //   const username = this.loginForm.get('username').value;
  //   const password = this.loginForm.get('password').value;

  //   const hasToken = this.userService.isLogged();

  //   token = this.authService.authenticate(username, password);

  //   if(token) {
  //     this.userService.setToken(token);
  //     this.router.navigateByUrl('/photos');
  //     this._document.defaultView.location.reload();
  //   } else {
  //     this.platformDetectorService.isPlatformBrowser() && this.el.nativeElement.focus();
  //     alert('Invalid user name or password. Try it again');
  //   }
  //   token = null;
  // }
}
























// login() {
//   // 1
//   // Pegar valor do input username
//   const username = this.loginForm.get('username').value;

//   // 2
//   // Pegar valor do input password
//   const password = this.loginForm.get('password').value;

//   // 3
//   // A minha função de authenticate retorna um usuário da classe User

//   // this.isAuthenticated = this.authService.authenticate(username, password);

//   this.user = this.authService.authenticate(username, password);

//   if(this.authService.authenticate(username, password)) {
//     this.user = this.authService.authenticate(username, password);
//     this.router.navigateByUrl('/photos/user/' + this.user.id);
//   }
//   else {
//     console.log(this.isAuthenticated);
//     this.loginForm.get('password').reset();
//     this.platformDetectorService.isPlatformBrowser() && this.el.nativeElement.focus();
//     alert('Invalid user name or password. Try it again');
//   }

//           // .subscribe(
//           //     () => this.router.navigateByUrl('/photos/user/' + this.user.id),
//           //     err => {
//           //         this.loginForm.get('password').reset();
//           //         this.platformDetectorService.isPlatformBrowser() && this.el.nativeElement.focus();

//           //         console.log(err);
//           //         alert('Invalid user name or password');
//           //     }
//           // );

//   // 9
//   // Se o usuário for retornado vazio (ou seja, não achado), entrará nessa consição de if
//   // if (!this.user) {
//     // Abre alerta com essa msg
//     // alert('Invalid username or password');

//     // Reseta apenas o input password
//     // this.loginForm.get('password').reset();

//     //Dá foco no input password
//     // this.platformDetectorService.isPlatformBrowser() && this.el.nativeElement.focus();
//   // } else {
//     // Caso voltar um usuário válido, redirecionar para essa rota
//     // this.router.navigateByUrl('/photos/user/' + this.user.id);
//   // }
