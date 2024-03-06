import { CartaoDeCredito } from "./CartaoDeCredito";
import { Cliente } from "./Cliente";

var c = new Cliente();
var cdc = new CartaoDeCredito();

c.nome = "Rafael Consentino";
cdc.numero = 111111;

cdc.cliente = c;

console.log(cdc.numero);
console.log(cdc.cliente.nome);