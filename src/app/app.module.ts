import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { ModalAddDividaComponent } from './components/modal-add-divida/modal-add-divida.component';
import { ModalAddPessoaComponent } from './components/modal-add-pessoa/modal-add-pessoa.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { DividaComponent } from './components/divida/divida.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    ModalAddPessoaComponent,
    TemplateComponent,
    PessoaComponent,
    DividaComponent,
    ModalAddDividaComponent
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
