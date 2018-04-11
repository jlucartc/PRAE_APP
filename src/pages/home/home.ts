import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { MapaPage } from '../mapa/mapa';
import { FormulariosPage } from '../formularios/formularios';
import { HTTP } from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private feed = "http://www.prae.ufc.br/feed/";

  private listaNoticias;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private http : HTTP) {

  }

  showMenu(){
    this.menuCtrl.open();
  }

  showNews(){

    let headers = {
      "Access-Control-Allow-Origin":"*",
      "Acess-Control-Allow-Methods":"GET,POST",
      "Accept":"application/xml",
      "content-type":"application/xml"
    }

    this.http.get(this.feed,{},headers).then(data => {

        // tratar XML

    }).catch(error => {});

  }

}
