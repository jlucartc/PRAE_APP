import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerDivisaoPage } from "../ver-divisao/ver-divisao";
import { VerMapaPage } from "../ver-mapa/ver-mapa";
import { ProvedorDeDadosProvider } from "../../providers/provedor-de-dados/provedor-de-dados";

/**
 * Generated class for the VerCoordenadoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-coordenadoria',
  templateUrl: 'ver-coordenadoria.html',
})
export class VerCoordenadoriaPage {

  private coordenadoria;

  private verCoordenadoriaSecoes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.coordenadoria = null;
    this.coordenadoria = this.navParams.get("coordenadoria");
    console.log(this.coordenadoria.mapas);
    this.verCoordenadoriaSecoes="Dados";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerCoordenadoriaPage');
  }

  public verDivisao(id) : void{

    let divisao;

    for(let item of this.coordenadoria.divisoes){

      if(item.id == id){

        divisao = item;
        break;

      }

    }

    this.navCtrl.push(VerDivisaoPage,{ divisao : divisao });

  }

  public verMapa(rota) : void{

      console.log("Rota: "+rota);

      let mapa;

      for(let item of this.coordenadoria.mapas ){

        if(item.rota == rota){

          mapa = item;
          break;

        }


      }

      this.navCtrl.push(VerMapaPage,{ mapa : mapa });

  }


}
