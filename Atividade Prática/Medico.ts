import { Login } from "./Login";
import { Pessoa } from "./Pessoa";

export class Medico extends Pessoa{
    private _crm:string;
    private _login:Login;

    constructor(id: number, nome: string, email: string, telefone: string, cpf: string, rg: string,
    dataNascimento: string, crm: string, login: Login) {
        super(id,nome,email,telefone,cpf,rg,dataNascimento);
        this._crm = crm;
        this._login = login;
    }
}