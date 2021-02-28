import {Router} from "@angular/router"
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from './../../services/pessoa.service';

@Component({
  selector: 'app-modal-add-pessoa',
  templateUrl: './modal-add-pessoa.component.html'
})
export class ModalAddPessoaComponent implements OnInit {
  modalRef: BsModalRef;
  pessoaForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
    ) {
    this.createForm();
  }

  ngOnInit() {}

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray' })
    );
  }

  createForm() {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required ],
      cpf: ['', Validators.required ],
   });
  }

  addPessoa() {
    console.log(this.pessoaForm.value)
    this.pessoaService.post(this.pessoaForm.value).subscribe(
      (response: Pessoa) => {
        this.router.navigate([`/dividas/${response.id}`]);
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
}
