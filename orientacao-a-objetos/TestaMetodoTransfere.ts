import { Agencia } from "./Agencia";
import { Conta } from "./Conta";

var agencia1 = new Agencia(1234);

var origem = new Conta(agencia1);
origem.saldo = 1000;

var destino = new Conta(agencia1);
destino.saldo = 1000;

origem.transfere(destino, 500);

console.log(origem.saldo);
console.log(destino.saldo);