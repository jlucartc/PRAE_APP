import { Component, ViewChild } from '@angular/core';
import { Platform , MenuController ,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CategoriasPage } from '../pages/categorias/categorias';
import { SobreAPraePage } from '../pages/sobre-a-prae/sobre-a-prae';
import { AuxiliosPage } from '../pages/auxilios/auxilios';
import { BolsasPage } from '../pages/bolsas/bolsas';
import { CoordenadoriasPage } from '../pages/coordenadorias/coordenadorias';
import { InformativosPage } from '../pages/informativos/informativos';
import { NoticiasPage } from '../pages/noticias/noticias';
import { OuvidoriaPage } from '../pages/ouvidoria/ouvidoria';
import { ResidenciaUniversitariaPage } from '../pages/residencia-universitaria/residencia-universitaria';
import { RestauranteUniversitarioPage } from '../pages/restaurante-universitario/restaurante-universitario';

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

  public inicio() : void {

    this.menu.close();

    this.nav.popToRoot();

  }

  public noticias() : void{

    this.menu.close();

    this.nav.push(NoticiasPage);

  }

  public sobreAPRAE() : void{

    this.menu.close();

    this.nav.push(SobreAPraePage);

  }

  public coordenadorias() : void{

    this.menu.close();

    this.nav.push(CoordenadoriasPage);

  }

  public bolsas() : void{

    this.menu.close();

    this.nav.push(BolsasPage);

  }

  public auxilios() : void{

    this.menu.close();

    this.nav.push(AuxiliosPage);

  }

  public residenciaUniversitaria() : void{

    this.menu.close();

    this.nav.push(ResidenciaUniversitariaPage);

  }

  public restauranteUniversitario() : void{

    this.menu.close();

    this.nav.push(RestauranteUniversitarioPage);

  }

  public informativos() : void{

    this.menu.close();

    this.nav.push(InformativosPage);

  }

  public ouvidoria() : void{

    this.menu.close();

    this.nav.push(OuvidoriaPage);

  }

  public categorias() : void{

    this.menu.close();
    this.nav.push(CategoriasPage);

  }
}
