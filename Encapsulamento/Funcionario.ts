export class Funcionario{
    private salario:number;
    private nome:string;

    public getSalario():number{
        return this.salario;
    }

    public setSalario(novoSalario:number):void{
        this.salario = novoSalario;
    }

    public getNome():string{
        return this.nome;
    }

    public setNome(novoNome:string):void{
        this.nome = novoNome;
    }

}