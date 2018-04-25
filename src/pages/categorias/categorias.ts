import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Http } from "@angular/http";
import { VerCategoriaPage } from "../ver-categoria/ver-categoria";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  private listaCategoriasNomes;
  private listaCategoriasIds;
  private url = "http://localhost:8080";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HTTP, private alertCtrl: AlertController, private httpNg : Http) {
  }

  ngOnInit(){

  }

  ionViewDidLoad() {
    this.alertCtrl.create({title : 'ionViewDidLoad'}).present();
    console.log('ionViewDidLoad CategoriasPage');
    this.carregarLista();
  }

  carregarLista(){

    this.httpNg.get(this.url+"/app/ws/listaCategorias").subscribe( data => { this.listaCategoriasIds = JSON.parse(data.json()).ids; this.listaCategoriasNomes = JSON.parse(data.json()).nomes; this.alertCtrl.create({ title: "Lista", message: JSON.parse(data.text()) }).present();}, error => { this.alertCtrl.create({title : "Error", message : error}).present(); });

  }

  verCategoria(id){

    this.navCtrl.push(VerCategoriaPage,{"id" : id});

  }

}
