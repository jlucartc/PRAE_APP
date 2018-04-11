import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { VerCategoriaPage } from "../ver-categoria/ver-categoria";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  private listaCategoriasNomes;
  private listaCategoriasIds;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HTTP, private alertCtrl: AlertController) {
  }

  ngOnInit(){

    this.carregarLista();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  carregarLista(){

    var headers = {
      "Access-Control-Allow-Origin":"*",
      "Acess-Control-Allow-Methods":"GET",
      "Accept":"application/json",
      "content-type":"application/json"
    };

    this.http.get("http://localhost:8080/app/ws/listaCategorias",{},headers).then(data => { this.listaCategoriasNomes = JSON.parse(data.data).nomes; this.listaCategoriasIds = JSON.parse(data.data).ids; }).catch(error => { let alert = this.alertCtrl.create({title : "Erro", subTitle: "", buttons: ["Ok"]}); alert.present(); console.log(error)});


  }

  verCategoria(id){

    this.navCtrl.push(VerCategoriaPage,{"id" : id});

  }

}
