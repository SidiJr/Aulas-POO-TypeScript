import { Agencia } from "./Agencia";
import { Conta } from "./Conta";

export class TestaValoresPadrao {
    public static main() {
        var agencia1 = new Agencia(1234);
        var c:Conta = new Conta(agencia1);

        console.log(c.numero);
        console.log(c.saldo);
        console.log(c.limite);
    }
}

TestaValoresPadrao.main();