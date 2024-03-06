import { Cargo } from "./Cargo";
import { Login } from "./Login";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa{
    private _cargo:Cargo;
    private _salario:number;
    private _login:Login;

    constructor(id: number, nome: string, email: string, telefone: string, cpf: string, rg: string,
    dataNascimento: string, cargo: Cargo, salario: number, login: Login) {
        super(id, nome, email, telefone, cpf, rg, dataNascimento);
        this._cargo = cargo;
        this._salario = salario;
        this._login = login;
    }

}