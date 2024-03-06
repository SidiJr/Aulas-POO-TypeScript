import { Telefonista } from "./Telefonista";
import { Gerente } from "./Gerente";
import { Secretaria } from "./Secretaria";

var gerente1:Gerente = new Gerente();
gerente1.Nome = "Rafael Cosentino";
gerente1.Salario = 2000;
gerente1.Usuario = "rafael.cosentino";
gerente1.Senha = "12345";

var telefonista1:Telefonista = new Telefonista();
telefonista1.Nome = "Carolina Mello";
telefonista1.Salario = 1000
telefonista1.EstacaoDeTrabalho = 13;

var secretaria1:Secretaria = new Secretaria();
secretaria1.Nome = "Tatiane Andrade";
secretaria1.Salario = 1100;
secretaria1.Ramal = 198;

gerente1.imprimir();

telefonista1.imprimir();

secretaria1.imprimir();
