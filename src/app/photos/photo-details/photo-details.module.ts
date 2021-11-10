import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoCommentComponent } from './photo-comment/photo-comment.component';
import { PhotoComment } from './../photo/photo.comment';
import { PhotoModule } from './../photo/photo.module';
import { NgModule, OnInit } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
    declarations: [PhotoDetailsComponent, PhotoCommentComponent, PhotoOwnerOnlyDirective],
    exports: [PhotoDetailsComponent, PhotoCommentComponent],
    imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule]
})
export class PhotoDetailsModule {}
