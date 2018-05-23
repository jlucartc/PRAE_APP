import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformativosPage } from './informativos';

@NgModule({
  declarations: [
    InformativosPage,
  ],
  imports: [
    IonicPageModule.forChild(InformativosPage),
  ],
})
export class InformativosPageModule {}
