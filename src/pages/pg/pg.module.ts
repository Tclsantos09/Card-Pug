import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PugPage } from './pg';

@NgModule({
  declarations: [
    PugPage,
  ],
  imports: [
    IonicPageModule.forChild(PugPage),
  ],
})
export class PugPageModule {}
