import { BaseModel } from './base-model.model';

export class Parcela extends BaseModel {
    public dividaId: string;
    public numero: number;
    public valor: number;
    public dataVencimento: Date;
}
