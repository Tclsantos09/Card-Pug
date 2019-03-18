import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupernaturalPage } from './supernatural';

@NgModule({
  declarations: [
    SupernaturalPage,
  ],
  imports: [
    IonicPageModule.forChild(SupernaturalPage),
  ],
})
export class SupernaturalPageModule {}
