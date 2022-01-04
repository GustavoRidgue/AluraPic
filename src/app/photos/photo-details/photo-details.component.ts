import { PhotoComponent } from './../photo/photo.component';
import { UserService } from './../../user/user.service';
import { User } from './../../user/user';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photo/photo';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;
  user: User;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);

    this.user = this.userService.getUser();
  }

  deletePhoto() {
    this.photoService.deletePhoto(this.user, this.photoId)
    .subscribe(
      () => {
        this.router.navigateByUrl('/photos');
      }
    )
  }

  likePhoto() {
    this.photo$ = this.photoService.like(this.user.id, this.photoId)
    .pipe(
      switchMap(
        () => this.photoService.findById(this.photoId)
      )
    )
    // .pipe(
    //   tap(
    //     () => myAlert('You liked this photo')
    //   )
    // )
  }

  dislikePhoto() {
    this.photo$ = this.photoService.dislike(this.user.id, this.photoId)
    .pipe(
      switchMap(
        () => this.photoService.findById(this.photoId)
      )
    )
    // .pipe(
    //   tap(
    //     () => myAlert('You liked this photo')
    //   )
    // )
  }

  // hasComments() {
  //   let pt: PhotoComment[];

  //   this.photoService.getComments(this.photoId).subscribe(
  //     photo => pt = photo
  //   )

  //   console.log(pt);
  //   console.log(pt.length);
  // }
}
