import { ActivatedRoute } from '@angular/router';
import { DividaService } from './../../services/divida.service';
import { DividaCalculada } from './../../models/divida-calculada.model';
import { Component } from '@angular/core';

@Component({
  	selector: 'app-divida-detalhe',
  	templateUrl: './divida-detalhe.component.html',
    styleUrls: ['./divida-detalhe.component.css']
})

export class DividaDetalheComponent {
  pessoaId: string;
  dividaId: string;
  dividaCalculada: DividaCalculada

  constructor(
    private dividaService: DividaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dividaId = this.activatedRoute.snapshot.params.dividaId;
    this.pessoaId = this.activatedRoute.snapshot.params.pessoaId;
    this.getAll(this.dividaId);
  }

  getAll(id: string) {
    this.dividaService.getById(id).subscribe((data: DividaCalculada) => {
      this.dividaCalculada = data;
    });
  }

  formatarMoeda(valor: any) {
    return "R$ " + (parseFloat(valor)).toLocaleString('pt-BR');
  }
}
