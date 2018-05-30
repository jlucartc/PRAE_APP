import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerMapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-mapa',
  templateUrl: 'ver-mapa.html',
})
export class VerMapaPage {

  private mapa;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mapa = this.navParams.get('mapa');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerMapaPage');
  }

}
