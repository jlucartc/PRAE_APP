import { Component } from '@angular/core';
import { NavController, MenuController, Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HTTP } from "@ionic-native/http";
import * as xml2js from "xml2js";

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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private httpNative : HTTP, private httpNg : Http, private req : HttpClient, private _platform : Platform, private alertCtrl : AlertController, private loadingCtrl : LoadingController) {

  }

  showMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  inicio(){

    this.navCtrl.popToRoot();

  }

  noticias(){

    this.navCtrl.push(NoticiasPage);

  }

  sobreAPRAE(){


    this.navCtrl.push(SobreAPraePage);

  }

  coordenadorias(){

    this.navCtrl.push(CoordenadoriasPage);

  }

  bolsas(){

    this.navCtrl.push(BolsasPage);

  }

  auxilios(){

    this.navCtrl.push(AuxiliosPage);

  }

  residenciaUniversitaria(){

    this.navCtrl.push(ResidenciaUniversitariaPage);

  }

  restauranteUniversitario(){

    this.navCtrl.push(RestauranteUniversitarioPage);

  }

  informativos(){

    this.navCtrl.push(InformativosPage);

  }

  ouvidoria(){

    this.navCtrl.push(OuvidoriaPage);

  }

  categorias() {

    this.navCtrl.push(CategoriasPage);

  }

}
