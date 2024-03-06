export class Funcionario{
    cargo:string;
    salario:number = 0;
    nome:string;

    aumentaSalario(valor: number): void{
        this.salario += valor;
    }

    consultaSalario(): void{
        console.log("SALÁRIO: "+this.salario)
    }
}