import { Aluno } from "./Aluno";
import { Turma } from "./Turma";

var aluno = new Aluno();
var turma = new Turma();

aluno.nome = "Pedro";
turma.tipoDeEnsino = "informática";

aluno.turma = turma;

console.log(aluno.nome);
console.log(aluno.turma.tipoDeEnsino);


