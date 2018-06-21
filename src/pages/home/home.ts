import { Component } from '@angular/core';
import { NavController, MenuController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HTTP } from "@ionic-native/http";
import * as xml2js from "xml2js";
import {FormsModule} from '@angular/forms';

import { CategoriasPage } from '../categorias/categorias';
import { MapaPage } from '../mapa/mapa';
import { FormulariosPage } from '../formularios/formularios';
import { VerCategoriaPage } from "../ver-categoria/ver-categoria";
import { HttpModule } from '@angular/http';
import { SobreAPraePage } from '../sobre-a-prae/sobre-a-prae';
import { AuxiliosPage } from '../auxilios/auxilios';
import { BolsasPage } from '../bolsas/bolsas';
import { CoordenadoriasPage } from '../coordenadorias/coordenadorias';
import { InformativosPage } from '../informativos/informativos';
import { NoticiasPage } from '../noticias/noticias';
import { OuvidoriaPage } from '../ouvidoria/ouvidoria';
import { ResidenciaUniversitariaPage } from '../residencia-universitaria/residencia-universitaria';
import { RestauranteUniversitarioPage } from '../restaurante-universitario/restaurante-universitario';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';
import { ProvedorDeDadosProvider } from "../../providers/provedor-de-dados/provedor-de-dados";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private noticiasNovas;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController, private push : Push, private storageCtrl : NativeStorage, private provedorDeDados : ProvedorDeDadosProvider) {

    this._platform.ready().then(() => {

          this.carregarNoticiasNovas();

          this.storageCtrl.getItem("noticiasNovasGUID").then( (data) => {

            console.log("GUIDS: ");
            console.log(data);
            //this.storageCtrl.remove("noticiasNovasGUID");

          }, error => {

            this.storageCtrl.setItem("noticiasNovasGUID",new Array(0)).then( (data) => {

              console.log("GUIDS:");
              console.log(data);

            }, error => {

              console.log(error);

            });

          });

          this.push.hasPermission().then((res: any) => {

            if (res.isEnabled) {


              const options: PushOptions = {
                android: {},
                ios: {
                  alert: 'true',
                  badge: true,
                  sound: 'false'
                },
                windows: {},
                browser: {
                  pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
              };

              alert("ok");

              const pushObject: PushObject = this.push.init(options);

              pushObject.on('notification').subscribe((notification: any) => {

                  console.log(notification.additionalData.guid);

                  this.tratarNotificacoes(notification);

              } );

              pushObject.on('registration').subscribe((registration: any) => { console.log('Device registered', registration);

                this.provedorDeDados.atualizarReceiverId(registration.registrationId);
                console.log(registration.registrationId);
                this.tratarRegistros(registration);

              });

              pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

            }

          });

    });

  }

  public tratarNotificacoes(notificacao){

    this.noticiasNovas += 1;

    this.storageCtrl.getItem("noticiasNovasGUID").then( (data) => {

      (data as Array<any>).push(notificacao.additionalData.guid);

      console.log("GUID ARRAY:",data);
      console.log(notificacao.guid);

      this.storageCtrl.setItem("noticiasNovasGUID",data).then((data) => {}, error => {

        console.log(error);

      });

    }, error => {

      console.log(error);

    });

  }

  public tratarRegistros(registration){

    console.log("Registration: ");
    console.log(registration);

  }

  public carregarNoticiasNovas(){

    this.noticiasNovas = this.storageCtrl.getItem("noticiasNovas").then( (data) => {

        this.noticiasNovas = data;

    }, error => {

        this.storageCtrl.setItem("noticiasNovas",0).then(
          (data) => { console.log(this.noticiasNovas); this.noticiasNovas = 0},
          error => { console.log(error); }
        );

    } );

  }

  public salvarNoticiasNovas(){

    this.storageCtrl.setItem("noticiasNovas",this.noticiasNovas).then( (data) => {}, error =>  {

      console.log(error);

    });

  }

  ionViewWillLeave(){

    console.log("IonViewWillLeave");
    this.salvarNoticiasNovas();

  }

  public showMenu() : void{
    this.menuCtrl.open();
  }

  public ionViewDidLoad() : void {
    console.log('ionViewDidLoad HomePage');
  }

  public inicio() : void{

    this.navCtrl.popToRoot();

  }

  public noticias() : void{

    this.navCtrl.push(NoticiasPage);

  }

  public sobreAPRAE() : void{


    this.navCtrl.push(SobreAPraePage);

  }

  public coordenadorias() : void{

    this.navCtrl.push(CoordenadoriasPage);

  }

  public bolsas() : void{

    this.navCtrl.push(BolsasPage);

  }

  public auxilios() : void{

    this.navCtrl.push(AuxiliosPage);

  }

  public residenciaUniversitaria() : void{

    this.navCtrl.push(ResidenciaUniversitariaPage);

  }

  public restauranteUniversitario() : void{

    this.navCtrl.push(RestauranteUniversitarioPage);

  }

  public informativos() : void{

    this.navCtrl.push(InformativosPage);

  }

  public ouvidoria() : void{

    this.navCtrl.push(OuvidoriaPage);

  }

  public categorias() : void{

    this.navCtrl.push(CategoriasPage);

  }

}
