import { Pessoa } from "./Pessoa";

export class Fisica extends Pessoa{
    private _rg:string;
    private _cpf:string;
    private _datanasc:string;

    constructor(nome:string, telefone:string, email:string, rg:string, cpf:string, datanasc:string){
        super(nome, telefone, email);
        this._rg = rg;
        this._cpf = cpf;
        this._datanasc = datanasc;

    }
    
}