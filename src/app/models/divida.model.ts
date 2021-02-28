import { BaseModel } from './base-model.model';
import { Parcela } from './parcela.model';

export class Divida extends BaseModel {
  public pessoaId: string;
  public numeroTitulo: string;
  public valorOriginal: number;
  public porcentagemMulta: number;
  public porcentagemJuros: number;
  public parcelas: Array<Parcela>;
}
