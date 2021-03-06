import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
  posts: ReplaySubject<{}> = new ReplaySubject<{}>()
  constructor() {
  }
  get Posts() {
    return this.posts;
  }
  addPost(post) {
    this.posts.next(post)
  }
}
