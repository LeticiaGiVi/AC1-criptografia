import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDadosPage } from './tela-dados.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDadosPageRoutingModule {}
