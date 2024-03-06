import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { GeradorDeExtrato } from "./GeradorDeExtrato";

let c1:ContaCorrente = new ContaCorrente();
let c2:ContaPoupanca = new ContaPoupanca();

c1.deposita(500);
c2.deposita(500);

let g:GeradorDeExtrato = new GeradorDeExtrato();
g.geraExtrato(c1);
g.geraExtrato(c2);