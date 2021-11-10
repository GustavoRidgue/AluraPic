import { UserService } from './../../user/user.service';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  url:any = '';
  @ViewChild('immediateClick') el:ElementRef;

  imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;


  constructor(private formBuilder: FormBuilder, private photoService: PhotoService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(255)],
      allowComments: [true]
    })
    // this.el.nativeElement.click();
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService.upload(description, allowComments, this.url, this.userService.getUser())
    .subscribe(
      () => this.router.navigateByUrl('/photos/user/' + this.userService.getUser().id)
    )
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) =>  // called once readAsDataURL is completed
        this.url = event.target.result;
    }
  }
}
