import { User } from './../../user/user';
import { Component, OnInit } from "@angular/core";
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
