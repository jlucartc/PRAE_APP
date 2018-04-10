import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';
import { MapaPage } from '../mapa/mapa';
import { FormulariosPage } from '../formularios/formularios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {

  }

  showMenu(){
    this.menuCtrl.open();
  }

}
