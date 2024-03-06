import { Funcionario } from "./Funcionario"

export class Secretaria extends Funcionario {
    private _ramal:number;

    get Ramal():number{
        return this._ramal;
    }

    set Ramal(novoRamal:number){
        this._ramal = novoRamal;
    }

    imprimir(): void {
        console.log("SECRETARIA");
        super.imprimir();
        console.log("Ramal:"+this.Ramal);
    }
}