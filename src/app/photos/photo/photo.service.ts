import { Photo } from './photo';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from 'src/app/user/user';
import { PhotoComment } from './photo.comment';

// const API = 'http://localhost:3000';
const API = 'http://localhost:8080/api/photo';

@Injectable({providedIn: 'root'})
export class PhotoService {
  photos: Photo[] = [];

  constructor(private http: HttpClient){}

  listAll() {
    return this.http.get<Photo[]>(API);
  }

  listFromDescription(description: string) {
    return this.http.get<Photo[]>(API + '/description/' + description);
  }

  listFromUser(userId: number) {
    // return this.http.get<Photo[]>(API + '/user?username=' + username);
    return this.http.get<Photo[]>(API + '/user/' + userId);
  }

  upload(description: string, allowComments: boolean, file: string, user: User) {
    // const formData = new FormData();
    // formData.append('description', description);
    // formData.append('allowComments', allowComments ? 'true' : 'false');
    // formData.append('imageFile', file);

    return this.http.post(
      'http://localhost:8080/api/photo/upload',
      {
        description: description,
        allowComments: allowComments,
        url: file,
        user: user
      }
    );
  }

  findById(id) {
    return this.http.get<Photo>(API + '/id/' + id);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(
      API + '/' + photoId + '/comments'
    );
  }

  addComment(comment: string, photoId: number, user: User) {
    return this.http.post(
      API + '/comment', {comment, photoId, user}
    );
  }

  deletePhoto(photoId: number) {
    return this.http.delete(API + '/delete/' + photoId);
  }
}






































// import { Photo } from './photo';
// import { HttpClient, HttpParams } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { User } from 'src/app/user/user';
// import { Observable } from 'rxjs';

// // const API = 'http://localhost:3000';
// const API = 'http://localhost:8080/api/photo';

// @Injectable({providedIn: 'root'})
// export class PhotoService {
//   photos: Photo[] = [];

//   constructor(private http: HttpClient){}

//   listAll() {
//     console.log('list all')
//     return this.http.get<Photo[]>(API + '/pictures');
//   }

//   listFromDescription(description: string) {
//     return this.http.get<Photo[]>(API + '/pictures?description=' + description);
//   }

//   listFromUser(userId: number) {
//     // return this.http.get<Photo[]>(API + '/user?username=' + username);
//     return this.http.get<Photo[]>(API + '/user/' + userId + '/pictures');
//   }

//   // getUserByName(username: string): Observable<User[]> {
//   //   return this.http.get<User[]>(API + '/user?username=' + username);
//   // }

//   // listFromPaginated(description: string, page: number) {
//   //   const params = new HttpParams().append('page', page.toString());
//   //   // return this.http.get<Photo[]>(API + '/' + description, {params: params});
//   //   return this.http.get<Photo[]>(API + '/' + description);
//   // }
// }
