import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the VerCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-categoria',
  templateUrl: 'ver-categoria.html',
})
export class VerCategoriaPage {

  private categoriaNome;

  private descricoes;

  private documentos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerCategoriaPage');

    this.http.get("http://localhost:8000/listaCategoriasAppWS",{},{}).then(data => { console.log(data); }).catch(error => { console.log('Erro!'); });

  }

}
