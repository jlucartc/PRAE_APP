import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

/**
 * Generated class for the CoordenadoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coordenadorias',
  templateUrl: 'coordenadorias.html',
})
export class CoordenadoriasPage {

  private coordenadorias;

  private divisoes;

  constructor(public httpNativo : HTTP, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoordenadoriasPage');
    this.buscarDados();
  }

  buscarDados(){
    console.log("buscarDados()");
    this.httpNativo.get('http://192.168.2.108:8000/app/ws/listaCoordenadorias',{},{}).then( data => {

        this.coordenadorias = new Array();

        this.divisoes = new Array();

        var dados = JSON.parse(data.data)[0];

        for(var i = 0; i < dados.length; i++){

          this.coordenadorias.push({ "id" : dados[i].id, "nome" : dados[i].nome });

        }

     } ).catch( error => { console.log(error); } );

  }

}
