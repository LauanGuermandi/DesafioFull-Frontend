import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaComponent } from './components/pessoa/pessoa.component';
import { DividaComponent } from './components/divida/divida.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'pessoa/:pessoaId/dividas', component: DividaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
