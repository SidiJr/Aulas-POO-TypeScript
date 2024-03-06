import { Agencia } from "./Agencia";
import { Conta } from "./Conta";

var agencia1 = new Agencia(1234);
var conta1 = new Conta(agencia1);

conta1.saldo = 1000.0;

conta1.agencia = agencia1;

console.log(conta1.agencia.numero);
console.log(conta1.saldo);