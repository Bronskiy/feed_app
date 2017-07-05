import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ConnectionComponent } from './connection';

@NgModule({
  declarations: [
    ConnectionComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ConnectionComponent
  ]
})
export class ConnectionComponentModule {}
