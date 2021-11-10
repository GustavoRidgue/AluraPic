import { LoadingModule } from './shared/components/loading/loading.module';
import { PhotoFormModule } from './photos/photo-form/photo-form.module';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListModule } from './photos/photo-list/photo-list.module';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './shared/components/vmessage/vmessage.module';
import { HomeModule } from './home/home.module';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DatePipe } from '@angular/common';
import { ImmediateClickModule } from './shared/directives/darken-on-hover/immediate-click/immediate-click.module';
import { DisableCopyPasteModule } from './shared/directives/disable-copy-paste/disable-copy-paste.module';

@NgModule({
  // Declarar componentes para funcionar
  declarations: [
    AppComponent
  ],
  // Importar modules para funcionar
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    VMessageModule,
    RouterModule,
    CoreModule,
    PhotoFormModule,
    ImmediateClickModule,
    LoadingModule,
    DisableCopyPasteModule
  ],
  providers: [
    PhotoListResolver,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
