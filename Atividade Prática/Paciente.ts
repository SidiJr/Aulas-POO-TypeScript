import { Convenio } from "./Convenio";
import { Pessoa } from "./Pessoa";

export class Paciente extends Pessoa{
    private _estadoCivil:string;
    private _localTrabalho:string;
    private _convenio:Convenio;

    constructor(id: number, nome: string, email: string, telefone: string, cpf: string, rg: string,
    dataNascimento: string, estadoCivil:string, localTrabalho:string, convenio: Convenio){
        super(id,nome,email,telefone,cpf,rg,dataNascimento)
        this._estadoCivil = estadoCivil;
        this._localTrabalho = localTrabalho;
        this._convenio = convenio;
    }

}