import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDadosPageRoutingModule } from './tela-dados-routing.module';

import { TelaDadosPage } from './tela-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDadosPageRoutingModule
  ],
  declarations: [TelaDadosPage]
})
export class TelaDadosPageModule {}
