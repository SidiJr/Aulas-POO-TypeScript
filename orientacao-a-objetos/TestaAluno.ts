import { Aluno } from "./Aluno";

export class TestaAluno {
    public static main() {
        var aluno1 = new Aluno();
        aluno1.nome = "Pedro"
        aluno1.rg = "111111111"
        aluno1.dataDeNascimento = "01/01/2001"

        var aluno2 = new Aluno();
        aluno2.nome = "João"
        aluno2.rg = "222222222"
        aluno2.dataDeNascimento = "02/02/2002"

        console.log(aluno1.nome)
        console.log(aluno1.rg)
        console.log(aluno1.dataDeNascimento)

        console.log(aluno2.nome)
        console.log(aluno2.rg)
        console.log(aluno2.dataDeNascimento)
    }
}

TestaAluno.main();