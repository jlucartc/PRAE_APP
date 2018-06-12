import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { BrowserTab } from '@ionic-native/browser-tab';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriasPage } from '../pages/categorias/categorias';
import { MapaPage } from '../pages/mapa/mapa';
import { FormulariosPage } from '../pages/formularios/formularios';
import { VerCategoriaPage } from '../pages/ver-categoria/ver-categoria';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { SobreAPraePage } from '../pages/sobre-a-prae/sobre-a-prae';
import { AuxiliosPage } from '../pages/auxilios/auxilios';
import { BolsasPage } from '../pages/bolsas/bolsas';
import { CoordenadoriasPage } from '../pages/coordenadorias/coordenadorias';
import { InformativosPage } from '../pages/informativos/informativos';
import { NoticiasPage } from '../pages/noticias/noticias';
import { OuvidoriaPage } from '../pages/ouvidoria/ouvidoria';
import { ResidenciaUniversitariaPage } from '../pages/residencia-universitaria/residencia-universitaria';
import { RestauranteUniversitarioPage } from '../pages/restaurante-universitario/restaurante-universitario';
import { VerCoordenadoriaPage } from "../pages/ver-coordenadoria/ver-coordenadoria";
import { VerDivisaoPage } from "../pages/ver-divisao/ver-divisao";
import { VerMapaPage } from "../pages/ver-mapa/ver-mapa";
import { ProvedorDeDadosProvider } from '../providers/provedor-de-dados/provedor-de-dados';
import { Push } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriasPage,
    MapaPage,
    FormulariosPage,
    VerCategoriaPage,
    SobreAPraePage,
    AuxiliosPage,
    BolsasPage,
    CoordenadoriasPage,
    InformativosPage,
    NoticiasPage,
    OuvidoriaPage,
    ResidenciaUniversitariaPage,
    RestauranteUniversitarioPage,
    VerCoordenadoriaPage,
    VerDivisaoPage,
    VerMapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriasPage,
    MapaPage,
    FormulariosPage,
    VerCategoriaPage,
    SobreAPraePage,
    AuxiliosPage,
    BolsasPage,
    CoordenadoriasPage,
    InformativosPage,
    NoticiasPage,
    OuvidoriaPage,
    ResidenciaUniversitariaPage,
    RestauranteUniversitarioPage,
    VerCoordenadoriaPage,
    VerDivisaoPage,
    VerMapaPage
  ],
  providers: [
    Push,
    StatusBar,
    SplashScreen,
    BrowserTab,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    ProvedorDeDadosProvider,
    NativeStorage
  ]
})
export class AppModule {}
