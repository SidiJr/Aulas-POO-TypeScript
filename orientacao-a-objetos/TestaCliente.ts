import { Cliente } from "./Cliente";

export class TestaCliente{
    public static main() {
        var c1:Cliente = new Cliente();
        c1.nome = "Rafael Cosentino";
        c1.codigo = 1;

        var c2:Cliente = new Cliente();
        c2.nome = "Jonas Hirata";
        c2.codigo = 2

        console.log(c1.nome);
        console.log(c1.codigo);
        console.log(c2.nome);
        console.log(c2.codigo);
    }
}

TestaCliente.main();
