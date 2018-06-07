import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import { HTTP } from "@ionic-native/http";
import * as xml2js from "xml2js";
import 'rxjs/add/observable/fromPromise';
/*
Generated class for the ProvedorDeDadosProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()

export class ProvedorDeDadosProvider {

  private noticiasFullUrl;

  private noticiasProxy;

  private listaCategoriasUrl;

  private listaCoordenadoriasUrl;


  constructor(public http: HttpClient, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {
    console.log('Hello ProvedorDeDadosProvider Provider');

    this.noticiasFullUrl = "http://192.168.2.108:8000/app/ws/noticias";

    this.noticiasProxy = "/feed";

    this.listaCategoriasUrl = "http://192.168.2.108:8000/app/ws/listaCategorias";

    this.listaCoordenadoriasUrl = "http://192.168.2.108:8000/app/ws/listaCoordenadorias";

  }

  public bolsas(){}

  public auxilios(){}

  public programas(){}

  public institucionais(){}

  public listaCategorias(){}

  public listaCoordenadorias(){}

  public noticias() {

    if(this._platform.is("mobile")){

      console.log("Mobile");

      //var alert = this.alertCtrl.create({title: "Mobile"});

      //alert.present();

      return this.httpNg.get(this.noticiasFullUrl);

    }else if(this._platform.is("core")){


      console.log("Not mobile");

      //var alert = this.alertCtrl.create({title: "Not Cordova"});

      //alert.present();

      let noticias;

      return this.httpNg.get(this.noticiasProxy)._do( data => { noticias = xml2js.parseString(data.text(), function(err,res){ noticias = res.rss.channel[0].item } ); console.log( "ProvedorDeDadosProvider(Not mobile): "+this.noticias  ); }, error => { this.alertCtrl.create({title : "Erro" }).present(); } ); //.get(this.noticiasProxy);  //.subscribe( data => { noticias = xml2js.parseString(data.text(), function(err,res){ noticias = res.rss.channel[0].item } ); console.log( this.noticias  ); }, error => { lc.dismiss();  this.alertCtrl.create({title : "Erro" }).present(); });


    }

  }

}
