import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
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
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {}

  submit(){
    this.db.list('/posts').push(this.post)
    this.post = new Post()
    this. navCtrl.parent.select(0)
  }
}
