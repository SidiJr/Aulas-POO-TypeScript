import { Fisica } from "./Fisica";
import { Pessoa } from "./Pessoa";

export class Juridica extends Pessoa{
    private _razaosocial:string;
    private _cnpj:string;
    private _responsavel:Fisica;

    constructor(nome:string, telefone:string, email:string, razaosocial:string, cnpj:string, responsavel:Fisica){
        super(nome,telefone,email)
        this._razaosocial = razaosocial;
        this._cnpj = cnpj;
        this._responsavel = responsavel;
    }

    alterarResponsavel(resp:Fisica){
        let nomeantigo = this._responsavel.Nome;
        this._responsavel = resp;
        console.log("O responsável da empresa "+this._razaosocial+" foi alterado de "+nomeantigo+" para "+this._responsavel.Nome+".");
    }
}