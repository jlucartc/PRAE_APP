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

  constructor( public provedorDeDados : ProvedorDeDadosProvider, public browserTabCtrl : BrowserTab ,public navParams: NavParams, private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {

    let lc = this.loadingCtrl.create().present();

    ( <Observable<any>> this.provedorDeDados.noticias(lc)).subscribe( data => { this.noticias = data; console.log("Subscribing: "+data); } );

  }


  public showMenu() : void{
    this.menuCtrl.open();
  }

  public abrirUrl(url : String) : void{

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

  ionViewDidLoad(){
    console.log('ionViewDidLoad NoticiasPage');

    let lc = this.loadingCtrl.create();

    this.showNews(lc);
  }

  public showNews(lc : Loading) :  void{



  }

  }
