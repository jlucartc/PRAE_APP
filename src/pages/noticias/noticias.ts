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

  constructor( public browserTabCtrl : BrowserTab ,public navParams: NavParams, private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {
  }


    showMenu(){
      this.menuCtrl.open();
    }

    abrirUrl(url : String){

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

    ionViewDidLoad() {
      console.log('ionViewDidLoad NoticiasPage');

      let lc = this.loadingCtrl.create();

      this.showNews(lc);
    }

    showNews(lc : Loading){

      if(this._platform.is("mobile")){

        console.log("Mobile");

        var alert = this.alertCtrl.create({title: "Mobile"});

        alert.present();

        lc.present();



        this.httpNative.get("http://prae.ufc.br"+this.feed,{},{}).then(

          data => {
            let response;
            this.noticias = xml2js.parseString(data.data, function(err,res){ response = res.rss.channel[0].item; console.log(res); } ) ;
            this.noticias = response;
            console.log( this.noticias ) ;
            /*this.alertCtrl.create({ title: "Ok" , message: "Http nativo funcionando"}).present();*/
            setTimeout(lc.dismiss(),700);
          } ).catch( error => { this.alertCtrl.create({title : "Erro",  message : "Http nativo não funcionou"+error}).present(); } );



          //this.httpNg.get("http://prae.ufc.br"+this.feed).subscribe( data => { let response; this.noticias = xml2js.parseString(data.text(), function(err,res){ response = res.rss.channel[0].item } ); this.noticias = response; setTimeout(lc.dismiss(), 700); }, error => { lc.dismiss(); this.alertCtrl.create({title : "Erro", message: "Erro: "+error+"  :"+"http://prae.ufc.br"+this.feed }).present(); } );

      }else if(this._platform.is("core")){


        console.log("Not mobile");

        var alert = this.alertCtrl.create({title: "Not Cordova"});

        alert.present();

        return this.httpNg.get(this.feed).subscribe( data => { let response; this.noticias = xml2js.parseString(data.text(), function(err,res){ response = res.rss.channel[0].item } ); this.noticias = response; console.log( this.noticias  ); }, error => { lc.dismiss();  this.alertCtrl.create({title : "Erro" }).present(); });

      }

    }

}
