import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
class Post {
  title: string
  body: string
  id: string

  constructor() {}
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post = new Post()
  constructor(public navCtrl: NavController, public _data: DataProvider) {}

  submit(){
    this._data.addPost(this.post)
    this.post = new Post()
    this. navCtrl.parent.select(0)
  }
}