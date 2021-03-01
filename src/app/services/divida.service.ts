import { DividaCalculada } from './../models/divida-calculada.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Divida } from './../models/divida.model';

@Injectable({
  providedIn: 'root'
})
export class DividaService {
  baseUrl = environment.API_URL + '/Divida';

  constructor(private http: HttpClient) { }

  getFromPessoaId(id: string): Observable<Divida[]>{
    return this.http.get<Divida[]>(`${this.baseUrl}/FromPessoa/${id}`);
  }

  getById(id: string): Observable<DividaCalculada>{
    return this.http.get<DividaCalculada>(`${this.baseUrl}/${id}`);
  }

  post(divida: Divida){
    return this.http.post(this.baseUrl, divida);
  }
}
