import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DividaService } from '../../services/divida.service';
import { Divida } from '../../models/divida.model';
import { Parcela } from '../../models/parcela.model';

@Component({
  selector: 'app-add-divida',
  templateUrl: './add-divida.component.html',
  styleUrls: ['./add-divida.component.css']
})
export class AddDividaComponent implements OnInit {
  pessoaId: string;
  parcelas: Array<Parcela>;

  dividaForm: FormGroup;
  parcelaForm: FormGroup;

  success = false;
  errors = []

  constructor(
    private formBuilder: FormBuilder,
    private dividaService: DividaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.pessoaId = this.activatedRoute.snapshot.params.pessoaId;
  }

  createForm() {
    this.dividaForm = this.formBuilder.group({
      pessoaId: [''],
      valorOriginal: ['', Validators.required ],
      numeroTitulo: ['', Validators.required, Validators.minLength(2) ],
      porcentagemJuros: ['', Validators.required ],
      porcentagemMulta: ['', Validators.required ],
      parcelas: [[], Validators.required ],
    });

    this.parcelaForm = this.formBuilder.group({
      numero: ['', Validators.required ],
      valor: ['', Validators.required ],
      dataVencimento: ['', Validators.required ],
    });
  }

  adicionarParcela() {
    const parcela = this.parcelaForm.value;
    let index = this.parcelas.findIndex(p => p.numero == parcela.numero);
    this.errors = [];

    if(index >= 0) {
      this.errors.push("Este número de parcela já existe.");
      return;
    }

    if (this.parcelas == null) {
      this.parcelas = [];
    }
    this.parcelas.push(parcela);
    this.dividaForm.patchValue({ parcelas: this.parcelas });
    this.parcelaForm.reset();
  }

  addDivida() {
    this.errors = [];

    if (this.pessoaId != null) {
      this.dividaForm.patchValue({ pessoaId: this.pessoaId });
      this.dividaForm.patchValue({ parcelas: this.parcelas });

      this.dividaService.post(this.dividaForm.value).subscribe(
        (response: Array<Divida>) => {
          this.dividaForm.reset();
          this.success = true;
        },
        (response: any) => {
          console.error(response.error);
          this.success = false;
          this.errors.push(response.error());
        }
      );
    }
  }

  removeParcela(index: number) {
    this.parcelas.splice(index, 1);
  }

  dataFormatada(stringData: string){
      const data = new Date(stringData);
      const options = {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit'
      };
      return data.toLocaleString('pt-BR', options);
  }

  valorFormatado(valor: string) {
    return `R$ ${valor}`.replace('.', ',');
  }
}
