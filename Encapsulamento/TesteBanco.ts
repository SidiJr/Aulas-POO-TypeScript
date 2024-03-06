import { Banco } from "./Banco";

let conta1 = new Banco();

conta1.setNumero("111111");
conta1.setLimite(2000);
conta1.setSaldo(1500);

console.log(conta1.getNumero());
console.log(conta1.getLimite());
console.log(conta1.getSaldo());
