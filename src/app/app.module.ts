import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { AddDividaComponent } from './pages/add-divida/add-divida.component';
import { AddPessoaComponent } from './pages/add-pessoa/add-pessoa.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { DividaComponent } from './pages/divida/divida.component';
import { DividaDetalheComponent } from './pages/divida-detalhe/divida-detalhe.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AddPessoaComponent,
    TemplateComponent,
    PessoaComponent,
    DividaComponent,
    AddDividaComponent,
    DividaDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
