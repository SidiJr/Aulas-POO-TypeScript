import { Funcionario } from "./Funcionario";

export class Telefonista extends Funcionario {
    private _estacaoDeTrabalho:number;

    get EstacaoDeTrabalho():number{
        return this._estacaoDeTrabalho;
    }

    set EstacaoDeTrabalho(novaEstacao:number){
        this._estacaoDeTrabalho = novaEstacao;
    }

    imprimir():void{
        console.log("TELEFONISTA") ;
        super.imprimir();
        console.log("Estacao de trabalho:"+this.EstacaoDeTrabalho);

    }
}