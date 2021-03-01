import { BaseModel } from './base-model.model';
import { ParcelaCalculada } from './parcela-calculada.model';

export class DividaCalculada extends BaseModel {
  public nomeDevedor: string;
  public numeroTitulo: string;
  public valorOriginal: number;
  public porcentagemMulta: number;
  public porcentagemJuros: number;
  public diasAtrasado: number;
  public valorAtualizado: number;
  public multa: number;
  public parcelas: Array<ParcelaCalculada>;
}
