import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the ConnectionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent {
  status: FirebaseObjectObservable<any>
  constructor(private db: AngularFireDatabase) {
    this.status = this.db.object('.info/connected')
  }

}
