import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
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
  private url = "http://192.168.2.108:8000/app/ws/listaCategorias";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HTTP, private alertCtrl: AlertController, private httpNg : Http, private loadingCtrl : LoadingController) {
  }

  ngOnInit(){

  }

  ionViewDidLoad() {
    //this.alertCtrl.create({title : 'ionViewDidLoad'}).present();
    //console.log('ionViewDidLoad CategoriasPage');
    let lc = this.loadingCtrl.create();
    this.carregarLista(lc);
  }

  carregarLista(lc : Loading){

    lc.present();
    this.httpNg.get(this.url).subscribe( data => { this.listaCategoriasIds = data.json().ids; this.listaCategoriasNomes = data.json().nomes; setTimeout(lc.dismiss(),700); }, error => { this.alertCtrl.create({title : "Error", message : error}).present(); });

  }

  verCategoria(id){

    this.navCtrl.push(VerCategoriaPage,{"id" : id});

  }

}
