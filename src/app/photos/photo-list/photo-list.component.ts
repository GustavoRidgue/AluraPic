import { Photo } from './../photo/photo';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;

  description: string;
  userId: number;
  username: string;

  // Injeção de depedencias
  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){}

  // Inicialização posterior de injeção
  ngOnInit(): void {
    // this.photos = this.activatedRoute.snapshot.data['photos'];

    this.description = this.activatedRoute.snapshot.params.description;
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.username = this.activatedRoute.snapshot.params.username;

    if(this.description) {
      this.photoService
      .listFromDescription(this.description)
      .subscribe(photo => this.photos = photo);
    } else if (this.userId) {
      this.photoService
      .listFromUser(this.userId)
      .subscribe(photo => this.photos = photo);
    } else {
      this.photoService
      .listAll()
      .subscribe(photo => this.photos = photo);
    }

    // setTimeout(()=>{                           //<<<---using ()=> syntax
    //   this.messageSuccess = false;
    // }, 3000);
  }

  // load() {
  //   // this.photoService.listFromPaginated(this.username, this.currentPage)
  //   this.photoService.listFromDescription('pictures')
  //   .subscribe(photos => {
  //     this.filter = '';
  //     this.photos = this.photos.concat(photos);
  //     if (!photos.length) this.hasMore = false;
  //   })
  // }

}
