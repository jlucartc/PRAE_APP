import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { MapaPage } from '../mapa/mapa';
import { FormulariosPage } from '../formularios/formularios';
import { HTTP } from "@ionic-native/http";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private feed = "/feed";

  private noticias = "Sem notícias";

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private http : HTTP, private req : HttpClient) {

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

    //this.req.get(this.feed).subscribe( res => { console.log(res); });

    this.http.get(this.feed,{},{}).then(data => {

        console.log(data.data);

    }).catch(error => { console.log(error); });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.showNews();
  }


}
