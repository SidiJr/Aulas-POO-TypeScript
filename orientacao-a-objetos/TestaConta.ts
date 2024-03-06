import { Conta } from "./Conta";

export class TestaConta {
    public static main() {
        var c1:Conta = new Conta;
        c1.numero = 1234;
        c1.saldo = 1000;
        c1.limite = 500;

        var c2:Conta = new Conta;
        c2.numero = 5678;
        c2.saldo = 2000;
        c2  .limite = 250;

        console.log(c1.numero);
        console.log(c1.saldo);
        console.log(c1.limite);

        console.log(c2.numero);
        console.log(c2.saldo);
        console.log(c2.limite);

    }
}

TestaConta.main();