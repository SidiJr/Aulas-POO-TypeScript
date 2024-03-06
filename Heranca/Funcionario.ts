export class Funcionario{
    private _nome:string;
    protected _salario:number;

    get Nome():string{
        return this._nome;
    }

    set Nome(novoNome:string){
        this._nome = novoNome;
    }

    get Salario():number{
        return this._salario;
    }

    set Salario(novoSalario:number){
        this._salario = novoSalario;
    }

    calculaBonificacao():number{
        return this._salario * 0.1;
    }

    imprimir():void{
        console.log(this.Nome);
        console.log(this.Salario);
        console.log(this.calculaBonificacao());
    }
}
