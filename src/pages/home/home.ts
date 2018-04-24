import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
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
  private noticias : any;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform) {

  }

  showMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.showNews();
  }

  private handleXML = function(err,res){

    this.noticias = res;

  }

  showNews(){

    if(!this._platform.is("core")){

      console.log("Cordova");

      this.httpNative.get("http://prae.ufc.br"+this.feed,{},{}).then( data => { console.log( data.data ); this.noticias = "Cordova" } ).catch( error => { console.log(error); } );

    }else{


      console.log("Not Cordova");
      return this.httpNg.get(this.feed).subscribe( data => { let response; this.noticias = xml2js.parseString(data.text(), function(err,res){ response = res.rss.channel[0].item } ); this.noticias = response; console.log( this.noticias  ); } );

    }

  }



}
