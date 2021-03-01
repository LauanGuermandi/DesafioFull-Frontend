import { BaseModel } from './base-model.model';

export class ParcelaCalculada extends BaseModel {
    public dividaId: string;
    public numero: number;
    public valor: number;
    public dataVencimento: Date;
    public valorAtualizado: number;
    public diasAtrasado: number;
    public juros: number;
}
