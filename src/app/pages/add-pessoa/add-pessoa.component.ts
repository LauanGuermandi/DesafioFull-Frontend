import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html',
  styleUrls: [ './add-pessoa.component.css' ]
})
export class AddPessoaComponent implements OnInit {
  success = false;
  errors = [];

  pessoa: Pessoa;
  pessoaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required ],
      cpf: ['', Validators.required ],
   });
  }

  addPessoa() {
    this.pessoaService.post(this.pessoaForm.value).subscribe(
      (response: Pessoa) => {
        this.success = true;
        this.pessoa = response;
      },
      (response: any) => {
        console.error(response.error);
        this.errors.push(response.error)
      }
    );
  }
}
