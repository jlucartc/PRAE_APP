import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";
import { VerCoordenadoriaPage } from "../ver-coordenadoria/ver-coordenadoria";
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

  public buscarDados() : void{
    console.log("buscarDados()");
    this.httpNativo.get('http://192.168.2.108:8000/app/ws/listaCoordenadorias',{},{}).then( data => {

        this.coordenadorias = new Array();

        this.divisoes = new Array();

        var dados = JSON.parse(data.data)[0];

        for(var i = 0; i < dados.length; i++){

          this.coordenadorias.push(dados[i]);
          console.log(dados[i]);

        }

     } ).catch( error => { console.log(error); } );

  }

  public verCoordenadoria(id) : void {

    let coordenadoria;

    for(let item of this.coordenadorias){

      if(item.id == id){

        coordenadoria = item;
        break;

      }

    }

    this.navCtrl.push(VerCoordenadoriaPage, { coordenadoria: coordenadoria });

  }

}
