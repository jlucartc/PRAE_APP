import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SobreAPraePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre-a-prae',
  templateUrl: 'sobre-a-prae.html',
})
export class SobreAPraePage {
  secoes: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.secoes = "sobre";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobreAPraePage');
  }

}
