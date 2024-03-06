import { Funcionario } from "./Funcionario";

var funcionario1 = new Funcionario();

funcionario1.nome = "Lucas";

funcionario1.visualizarFuncionario();
funcionario1.alteraNome("Alex");
funcionario1.visualizarFuncionario();
funcionario1.alteraSalario(500);
funcionario1.visualizarFuncionario();