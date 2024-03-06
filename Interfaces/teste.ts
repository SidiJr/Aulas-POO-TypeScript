import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

let c1:ContaCorrente = new ContaCorrente();
let c2:ContaPoupanca = new ContaPoupanca();

c1.deposita(500);
c2.deposita(500);

c1.saca(100);
c2.saca(100);

console.log(c1.getSaldo());
console.log(c2.getSaldo());