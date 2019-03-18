import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SupernaturalPage } from '../supernatural/supernatural';
import { PllPage } from '../pll/pll';
import { HimymPage } from '../himym/himym';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  supernaturalClick(){
    this.navCtrl.push(SupernaturalPage)
  }

  pllClick(){
    this.navCtrl.push(PllPage)
  }
  himymClick(){
    this.navCtrl.push(HimymPage)
  }

}
