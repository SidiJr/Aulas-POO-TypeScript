import { Conta } from "./Conta";

var conta1 = new Conta();

conta1.limite = 1000;
conta1.numero = 1234;
conta1.saldo = 500;

conta1.imprimeExtrato();
conta1.deposita(100);
conta1.imprimeExtrato();
conta1.saca(50);
conta1.imprimeExtrato();
