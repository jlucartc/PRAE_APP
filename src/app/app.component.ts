import { Component, ViewChild } from '@angular/core';
import { Platform , MenuController ,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CategoriasPage } from '../pages/categorias/categorias';
import { MapaPage } from '../pages/mapa/mapa';
import { FormulariosPage } from '../pages/formularios/formularios';
import { VerCategoriaPage } from "../pages/ver-categoria/ver-categoria";
import { HttpModule } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('content') nav: NavController;
  @ViewChild('menu') menu : MenuController;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  categorias() {

    this.menu.close();
    this.nav.push(CategoriasPage);

  }

  mapa(){

    this.menu.close();
    this.nav.push(MapaPage);

  }

  formularios(){

    this.menu.close();
    this.nav.push(FormulariosPage);

  }
}
