import { LoadingModule } from './../shared/components/loading/loading.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './photo/photo.module';
import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './photo-list/search/search.component';
import { CardModule } from './../shared/components/card/card.module';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule ({
  // Declara os components que podem conversar entre si
  declarations: [
    // PhotoComponent,
    PhotoListComponent,
    PhotosComponent,
    FilterByDescription,
    LoadButtonComponent,
    SearchComponent
  ],
  // Deixa visivel o component pra quem importar o PhotosModule
  // exports: [
  //   PhotoComponent
  // ],
  imports: [
    HttpClientModule, CommonModule, CardModule, DarkenOnHoverModule, PhotoModule, RouterModule, PhotoDetailsModule, LoadingModule
  ]
})
export class PhotosModule {

}
