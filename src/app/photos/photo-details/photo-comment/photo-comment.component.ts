import { element } from 'protractor';
import { UserService } from './../../../user/user.service';
import { User } from './../../../user/user';
import { PhotoService } from './../../photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo.comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-comment',
  templateUrl: './photo-comment.component.html'
})
export class PhotoCommentComponent implements OnInit{
  @Input() photoId: number;
  commentId: number;
  user: User;
  comments$: Observable<PhotoComment[]>;

  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentForm = this.formBuilder.group({
      comment: ['', [
        Validators.maxLength(255), Validators.required
      ]]
    });

    this.user = this.userService.getUser();
  }

  save() {
    // const comment = this.commentForm.get('comment').value as string;
    const comment = this.commentForm.get('comment').value;

    const commentNoLeftSpace = comment.trimLeft();
    const commentNoSideSpace = commentNoLeftSpace.trimRight();
    const newComment = commentNoSideSpace;

    this.comments$ = this.photoService
      .addComment(newComment, this.photoId, this.user)
      .pipe(
        switchMap(
          () => this.photoService.getComments(this.photoId)
        )
      )
      .pipe(
        tap(
          () => this.commentForm.reset()
        )
      )
  }

  keyEnterSubmit(event) {
    if (event.keyCode === 13) {
      try {
        this.save();
      } catch (e) {
        alert('Sorry, something went wrong.');
      }
    }
  }

  changeCommentId(id) {
    if (id != null) this.commentId = id;
  }

  deleteComment(userId: number,
                photoId: number) {
    const photoCommentId = this.commentId;

    // this.photoService.deleteComment(userId, photoId, photoCommentId)
    // .subscribe(
    //   () => {
    //     console.log('deleted');
    //   }
    // )

    try {
      this.comments$ = this.photoService.deleteComment(userId, photoId, photoCommentId)
      .pipe(
        switchMap(
          () => this.photoService.getComments(this.photoId)
        )
      )
    } catch (e) {
      alert('Sorry, try it later');
    }

  }
}
