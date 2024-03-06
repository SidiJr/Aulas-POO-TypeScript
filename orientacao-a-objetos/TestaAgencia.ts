import { Agencia } from "./Agencia";

export class TestaAgencia {
    public static main() {
        var a1:Agencia = new Agencia(1234);

        var a2:Agencia = new Agencia(5678);

        console.log(a1.numero)
        console.log(a2.numero)
    }
}

TestaAgencia.main();