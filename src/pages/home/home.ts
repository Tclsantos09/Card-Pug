import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PugPage } from '../pg/pg';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  pugClick(){
    this.navCtrl.push(PugPage)
  }

}
