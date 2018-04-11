import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  private url = "http://localhost:8080/app/ws/categoria/"+this.navParams.get('id');

  private categoriaNome;

  private descricoes;

  private documentos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerCategoriaPage');
    this.carregarDados();

  }

  carregarDados(){

    var headers = {
      "Access-Control-Allow-Origin":"*",
      "Acess-Control-Allow-Methods":"GET",
      "Accept":"application/json",
      "content-type":"application/json"
    };

    this.http.get(this.url,{},headers).then(data => { console.log(JSON.parse(data.data)); }).catch(error => { let alert = this.alertCtrl.create({title : "Erro", subTitle: "", buttons: ["Ok"]}); alert.present(); console.log(error)});


  }

}
