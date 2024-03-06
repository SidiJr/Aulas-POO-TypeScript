import { Pessoa } from "./Pessoa";

// Criando algumas pessoas
let p0: Pessoa = new Pessoa("teste", "05/05/1975", null, null);
let p1: Pessoa = new Pessoa("Maria", "05/05/1975", p0, p0);
let p2: Pessoa = new Pessoa("José", "08/08/1970", p0, p0);
let p3: Pessoa = new Pessoa("João", "10/10/1990", p1, p2);

// Relações familiares
let p4: Pessoa = new Pessoa("Ana", "15/03/1995", p1, p2); // Irmã de João
let p5: Pessoa = new Pessoa("Pedro", "12/12/1985", p0, p0); // Tio de João e Ana
let p6: Pessoa = new Pessoa("Marta", "20/06/2000", p4, p5); // Prima de João

console.log(p3.getNome()+" é irmão(ã) de "+p4.getNome()+": "+p3.isIrmao(p4)+".");
console.log(p5.getNome()+" é tio(a) de "+p4.getNome()+": "+p5.isTio(p4)+".");
console.log(p6.getNome()+" é primo(a) de "+p4.getNome()+": "+p6.isPrimo(p4)+".");
console.log();
console.log(p4.getNome()+" é irmão(ã) de "+p5.getNome()+": "+p4.isIrmao(p5))+".";
console.log(p6.getNome()+" é tio(a) de "+p3.getNome()+": "+p6.isTio(p3)+".");
console.log(p4.getNome()+" é primo(a) de "+p5.getNome()+": "+p4.isPrimo(p5)+".");
console.log();
console.log(p4.getNome()+" é "+p4.getTipoParentesco(p6)+" de "+p6.getNome()+".");
console.log(p5.getNome()+" é "+p5.getTipoParentesco(p4)+" de "+p4.getNome()+".");
console.log(p6.getNome()+" é "+p6.getTipoParentesco(p4)+" de "+p4.getNome()+".");
console.log(p4.getNome()+" é "+p4.getTipoParentesco(p5)+" de "+p5.getNome()+".");
console.log(p6.getNome()+" é "+p6.getTipoParentesco(p3)+" de "+p3.getNome()+".");
console.log(p4.getNome()+" é "+p4.getTipoParentesco(p5)+" de "+p5.getNome()+".");