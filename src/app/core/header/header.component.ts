import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef, Inject } from '@angular/core';
import { User } from 'src/app/user/user';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy{
  user: User;
  navigationSubscription;

  constructor(private userService: UserService, private router: Router, @Inject(DOCUMENT) private _document: Document) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.user = this.userService.getUser();

    // if (window.location.href == 'http://localhost:4200/auth') {
    //   console.log('if condition');
    //   this.disable = true;
    // }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  logout() {
    // var c = confirm("Are you sure you want to Logout?");
    // var status = document.getElementById("content");
    // if (c == true) {
    //   this.userService.logout();
    //   this.router.navigate(['auth']);
    // }

    this.userService.logout();
    this.router.navigate(['auth']);
  }

  // isLogged() {
  //   return this.userService.isTokenAvaliable();
  // }
}
