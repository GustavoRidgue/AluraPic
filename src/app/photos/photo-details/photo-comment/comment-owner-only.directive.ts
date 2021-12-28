import { PhotoComment } from '../../photo/photo.comment';
import { User } from '../../../user/user';
import { Renderer, OnInit, Renderer2, ViewChildren, ElementRef } from '@angular/core';
import { Photo } from '../../photo/photo';
import { Directive, Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Directive({
  selector: '[commentOwnerOnly]'
})
export class CommentOwnerOnlyDirective implements OnInit {
  @Input() ownedComment: PhotoComment;
  @Input() nodePai;

  user: User;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();

    if (!this.user || this.user.id != this.ownedComment.user.id) {
      this.renderer.removeChild(this.nodePai, this.element.nativeElement);
    }
  }
}
