import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    private _usuario:string;
    private _senha:string;

    get Usuario():string {
        return this._usuario;
    }

    set Usuario(novoUsuario:string){
        this._usuario = novoUsuario;
    }

    get Senha():string {
        return this._senha;
    }

    set Senha(novaSenha:string){
        this._senha = novaSenha;
    }

    calculaBonificacao():number{
        return this._salario * 0.6 + 100;
    }

    override imprimir():void{
        console.log("GERENTE");
        super.imprimir();
        console.log("Usuário:"+this.Usuario);
        console.log("Senha:"+this.Senha);
    }
}