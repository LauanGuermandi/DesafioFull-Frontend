import { Component, OnInit } from '@angular/core';

import { Pessoa } from './../../models/pessoa.model';
import { PessoaService } from './../../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(public pessoaService: PessoaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.pessoaService.getAll().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
    });
  }
}
