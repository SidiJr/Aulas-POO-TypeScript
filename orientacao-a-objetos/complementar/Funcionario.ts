export class Funcionario{
    nome: string;
    salario: number = 200;

    alteraNome(novonome:string): void{
        this.nome = novonome;
    }

    alteraSalario(novosalario:number): void{
        this.salario = novosalario;
    }

    visualizarFuncionario():void{
        console.log(this.nome, this.salario);
    }
}