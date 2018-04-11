import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { RequestOptions, Headers } from '@angular/http';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerCategoriaPage');


    var headers = {
      "Access-Control-Allow-Origin":"*",
      "Acess-Control-Allow-Methods":"GET",
      "Accept":"application/json",
      "content-type":"application/json"
    };

    this.http.get("http://localhost:8080/listaCategoriasAppWS",{},headers).then(data => { let alert = this.alertCtrl.create({title : "Sucesso", subTitle: data.url, buttons: ["Ok"]}); alert.present(); }).catch(error => { let alert = this.alertCtrl.create({title : "Erro", subTitle: "", buttons: ["Ok"]}); alert.present(); console.log(error)});

  }

}
