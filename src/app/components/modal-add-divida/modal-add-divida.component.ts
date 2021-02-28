import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { DividaService } from './../../services/divida.service';
import { Divida } from './../../models/divida.model';
import { Parcela } from './../../models/parcela.model';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-modal-add-divida',
  templateUrl: './modal-add-divida.component.html',
  styleUrls: ['./modal-add-divida.component.css']
})
export class ModalAddDividaComponent implements OnInit {
  modalRef: BsModalRef;

  parcelas: Array<Parcela>;

  dividaForm: FormGroup;
  parcelaForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private dividaService: DividaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {}

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
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
    var parcela = this.parcelaForm.value;

    if (this.parcelas == null) {
      this.parcelas = [];
    }
    this.parcelas.push(parcela);
    this.dividaForm.patchValue({ parcelas: this.parcelas });
    this.parcelaForm.reset();
  }

  addDivida() {
    const id = this.activatedRoute.snapshot.params.pessoaId;

    if (id != null) {
      this.dividaForm.patchValue({ pessoaId: id });
      this.dividaForm.patchValue({ parcelas: this.parcelas });

      this.dividaService.post(this.dividaForm.value).subscribe(
        (response: Array<Divida>) => {
          this.dividaForm.reset();
          this.modalService.hide(1);
        },
        (erro: any) => {
          console.error(erro);
        }
      );
    }
  }

  dataFormatada(stringData: string){
      const data = new Date(stringData);
      const options = {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit'
      };
      return data.toLocaleString("pt-BR", options);
  }

  valorFormatado(valor: string) {
    return `R$ ${valor}`.replace(".", ",");
  }
}
