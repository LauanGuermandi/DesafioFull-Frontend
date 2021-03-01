import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { DividaComponent } from './pages/divida/divida.component';
import { AddDividaComponent } from './pages/add-divida/add-divida.component';
import { AddPessoaComponent } from './pages/add-pessoa/add-pessoa.component';
import { DividaDetalheComponent } from './pages/divida-detalhe/divida-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full',  },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'pessoa/form', component: AddPessoaComponent },
  { path: 'pessoa/:pessoaId/dividas', component: DividaComponent },
  { path: 'pessoa/:pessoaId/dividas/form', component: AddDividaComponent },
  { path: 'pessoa/:pessoaId/dividas/:dividaId', component: DividaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
