import { CartaoDeCredito } from "./CartaoDeCredito";

export class TestaCartaoDeCredito {
    public static main() {
        var cdc1 = new CartaoDeCredito(111111);
        cdc1.dataDeValidade = "01/01/2013";

        var cdc2 = new CartaoDeCredito(111111);
        cdc2.dataDeValidade = "01/01/2014";

        console.log(cdc1.numero);
        console.log(cdc1.dataDeValidade);
        console.log(cdc2.numero);
        console.log(cdc2.dataDeValidade);
    }
}

TestaCartaoDeCredito.main();