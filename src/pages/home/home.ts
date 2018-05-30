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
