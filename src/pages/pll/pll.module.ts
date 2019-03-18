import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PllPage } from './pll';

@NgModule({
  declarations: [
    PllPage,
  ],
  imports: [
    IonicPageModule.forChild(PllPage),
  ],
})
export class PllPageModule {}
