import { User } from './../../../user/user';
import { Renderer, OnInit, Renderer2, ViewChildren, ElementRef } from '@angular/core';
import { Photo } from './../../photo/photo';
import { Directive, Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto: Photo;
  @Input() nodePai;

  user: User;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('success');
    this.user = this.userService.getUser();

    if (!this.user || this.user.id != this.ownedPhoto.user.id) {
      this.renderer.removeChild(this.nodePai, this.element.nativeElement);
    }
  }
}
