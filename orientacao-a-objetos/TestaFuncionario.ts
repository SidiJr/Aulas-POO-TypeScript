import { Funcionario } from "./Funcionario";

export class TestaFuncionario {
    public static main() {
        var funcionario1 = new Funcionario();
        funcionario1.cargo = "professor";
        funcionario1.salario = 1000;

        var funcionario2 = new Funcionario();
        funcionario2.cargo = "diretor"
        funcionario2.salario = 2000;

        console.log(funcionario1.cargo);
        console.log(funcionario1.salario);

        console.log(funcionario2.cargo);
        console.log(funcionario2.salario);
    }
}

TestaFuncionario.main();