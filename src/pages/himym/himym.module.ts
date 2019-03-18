import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HimymPage } from './himym';

@NgModule({
  declarations: [
    HimymPage,
  ],
  imports: [
    IonicPageModule.forChild(HimymPage),
  ],
})
export class HimymPageModule {}
