import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardStackPage } from './card-stack';

@NgModule({
  declarations: [
    CardStackPage,
  ],
  imports: [
    IonicPageModule.forChild(CardStackPage),
  ],
})
export class CardStackPageModule {}
