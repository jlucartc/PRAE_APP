import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HTTP } from "@ionic-native/http";
import * as xml2js from "xml2js";
import { BrowserTab } from "@ionic-native/browser-tab";
import { ProvedorDeDadosProvider } from "../../providers/provedor-de-dados/provedor-de-dados";
import { NativeStorage } from '@ionic-native/native-storage';

/**
* Generated class for the NoticiasPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  private feed = "/feed";
  private noticias ;
  private guidArray : Array<any>;

  constructor( public provedorDeDados : ProvedorDeDadosProvider, public browserTabCtrl : BrowserTab ,public navParams: NavParams, private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController, private storageCtrl : NativeStorage) {

    this.provedorDeDados.noticias().subscribe( (data) => { this.noticias = this.processarNoticias(data.json()); console.log(this.noticias)}, (error) => { console.log("Erro(noticias.ts): "+error); }  );

  }


  public showMenu() : void{

    this.menuCtrl.open();

  }

  public abrirUrl(url : String) : void{

    var noticiasGuidArray : Array<any>;

    this.storageCtrl.getItem("noticiasNovasGUID").then(

      (data) => {

        console.log(data);

        noticiasGuidArray = data;

        var urls = noticiasGuidArray.filter( (noticia) => { console.log(noticia); return noticia == url} );

        console.log(urls);

        if(urls.length > 0){

          urls.forEach((e,i,a) => {

            noticiasGuidArray.splice(noticiasGuidArray.indexOf(e),1);

          });

          this.storageCtrl.setItem("noticiasNovasGUID",noticiasGuidArray).then(

            (data) => {},
            error => { console.log(error)}

          );

          this.storageCtrl.getItem("noticiasNovas").then(

            (data) => { this.storageCtrl.setItem("noticiasNovas",data-1).then(

              (data) => {},
              error => { console.log(error);}

            ); },
            error => { console.log(error); }

          );

        }

      },
      error => {

        console.log(error);

      }

    );

    this.browserTabCtrl.isAvailable().then(

      isAvailable => {

        if(isAvailable){

          this.browserTabCtrl.openUrl(url.toString()).then();

        }else{

          this.alertCtrl.create({ title: "Erro" , message: "Não foi possível abrir o browser"}).present();

        }

      }

    );

  }

  public processarNoticias(data){

    for(let item of data){

      console.log("processarDados");
      if(this.checar(item.guid)){

        item.isNova = true;

      }else{

        item.isNova = false;

      }

      console.log(item);

    }

    return data;

  }

  public checar(url : String) : boolean {

    this.storageCtrl.getItem("noticiasNovasGUID").then(

      (data) => { this.guidArray = (data as Array<any>) ; console.log("Data",this.guidArray); },
      error => { console.log("Array"); }

    );

    console.log("Comprimento: ",this.guidArray);

    if(this.guidArray.length > 0 && this.guidArray.find((e,i,a) => { console.log("Elemento: ",e); console.log("Url: ",url) ;return e == url })){

      console.log("true");
      return true;

    }

    console.log("false");
    return false;


  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad NoticiasPage');

    let lc = this.loadingCtrl.create();

  }



}
