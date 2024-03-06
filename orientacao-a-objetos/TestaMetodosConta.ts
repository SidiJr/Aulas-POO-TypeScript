import { Agencia } from "./Agencia";
import { Conta } from "./Conta";

var agencia1 = new Agencia(1234);
var c = new Conta(agencia1);

c.deposita(1000);
c.imprimeExtrato();

c.saca(100);
c.imprimeExtrato();

var saldoDisponivel = c.consultaSaldoDisponivel();

console.log("SALDO DISPONÍVEL: "+saldoDisponivel);