import { Funcionario } from "./Funcionario";

let funcionario1 = new Funcionario();

funcionario1.setNome("Rafael Cosentino");
funcionario1.setSalario(2000);

console.log(funcionario1.getNome());
console.log(funcionario1.getSalario());