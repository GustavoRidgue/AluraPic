import { PhotoAddGuard } from './core/auth/photo-add.guard';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { SignupComponent } from './home/signup/signup.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SigninComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoDetailsModule } from './photos/photo-details/photo-details.module';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  //   // component: SignupComponent
  //   // loadChildren: './home/home.module#HomeModule'
  // },
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/description/:description',
    component: PhotoListComponent
    // resolve: {
    //   photos: PhotoListResolver
    // }
  },
  {
    path: 'photos/user/:userId',
    component: PhotoListComponent
  },
  {
    path: 'photo/add',
    component: PhotoFormComponent,
    canActivate: [PhotoAddGuard]
  },
  {
    path: 'photos/user/name/:username',
    component: PhotoListComponent
  },
  {
    path: 'photo/:photoId',
    component: PhotoDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({//
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],//
  exports: [RouterModule]//
})//
export class AppRoutingModule {

}
