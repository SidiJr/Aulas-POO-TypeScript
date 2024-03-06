import { Turma } from "./Turma";

export class TestaTurma {
    public static main() {
        var turma1 = new Turma();
        turma1.periodo = "primeiro"
        turma1.serie = 1
        turma1.sigla = "A"
        turma1.tipoDeEnsino = "Informática"

        var turma2 = new Turma();
        turma2.periodo = "segundo"
        turma2.serie = 2
        turma2.sigla = "B"
        turma2.tipoDeEnsino = "Informática 2"

        console.log(turma1.periodo);
        console.log(turma1.serie);
        console.log(turma1.sigla);
        console.log(turma1.tipoDeEnsino);

        console.log(turma2.periodo);
        console.log(turma2.serie);
        console.log(turma2.sigla);
        console.log(turma2.tipoDeEnsino);
    }
}

TestaTurma.main();