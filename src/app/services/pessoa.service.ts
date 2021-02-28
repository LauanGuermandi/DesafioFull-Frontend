import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.API_URL + '/Pessoa';

  getAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.baseUrl);
  }

  getById(id: string): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
  }

  post(pessoa: Pessoa){
    return this.http.post(this.baseUrl, pessoa);
  }
}
