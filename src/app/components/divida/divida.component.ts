import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DividaService } from './../../services/divida.service';
import { Divida } from './../../models/divida.model';

@Component({
  selector: 'app-divida',
  templateUrl: './divida.component.html',
  styleUrls: ['./divida.component.css']
})
export class DividaComponent implements OnInit {
  pessoa: Pessoa;
  dividas: Array<Divida>;

  constructor(
    private pessoaService: PessoaService,
    private dividaService: DividaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const pessoaId = this.activatedRoute.snapshot.params.pessoaId;
    this.getPessoaById(pessoaId);
  }

  getAll() {
    if (this.pessoa == null) {
      return;
    }

    this.dividaService
      .getFromPessoaId(this.pessoa.id)
      .subscribe((data: Array<Divida>) => {
        console.log(data);
        this.dividas = data;
      });
  }

  getPessoaById(id: string) {
    this.pessoaService.getById(id).subscribe((data: Pessoa) => {
      this.pessoa = data;
      this.getAll();
    });
  }
}
