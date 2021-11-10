import { DisableCopyPasteModule } from './../shared/directives/disable-copy-paste/disable-copy-paste.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
      SigninComponent,
      SignupComponent,
      HomeComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      HomeRoutingModule,
      LoadingModule,
      DisableCopyPasteModule
  ],
  exports: [
    SignupComponent
  ]
})
export class HomeModule {

}
