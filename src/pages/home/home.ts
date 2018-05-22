import { Component } from '@angular/core';
import { NavController, MenuController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { MapaPage } from '../mapa/mapa';
import { FormulariosPage } from '../formularios/formularios';
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HTTP } from "@ionic-native/http";
import * as xml2js from "xml2js";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private feed = "/feed";
  private noticias ;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {

  }

  showMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    let lc = this.loadingCtrl.create();

    this.showNews(lc);
  }

  private handleXML = function(err,res){

    this.noticias = res;

  }

  showNews(lc : Loading){

    if(!this._platform.is("core")){

      //console.log("Cordova");

      //var alert = this.alertCtrl.create({title: "Cordova"});

      //alert.present();

      lc.present();

      this.httpNg.get("http://prae.ufc.br"+this.feed).subscribe( data => { let response; this.noticias = xml2js.parseString(data.text(), function(err,res){ response = res.rss.channel[0].item } ); this.noticias = response; setTimeout(lc.dismiss(), 700); }, error => { lc.dismiss(); this.alertCtrl.create({title : "Erro" }).present(); } );

    }else{


      console.log("Not Cordova");

      var alert = this.alertCtrl.create({title: "Not Cordova"});

      alert.present();

      return this.httpNg.get(this.feed).subscribe( data => { let response; this.noticias = xml2js.parseString(data.text(), function(err,res){ response = res.rss.channel[0].item } ); this.noticias = response; console.log( this.noticias  ); }, error => { lc.dismiss();  this.alertCtrl.create({title : "Erro" }).present(); });

    }

  }
}
