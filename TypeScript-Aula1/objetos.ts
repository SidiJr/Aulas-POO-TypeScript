import { Car, Motorista } from "./exercicio";

let car1:Car = new Car();
car1.marca = "Volkswagem";
car1.modelo = "Gol";
car1.cor = "Preto";
car1.placa = "ABC123";
car1.velocidade = 0;

let motorista1:Motorista = new Motorista();
motorista1.nome = "Paulo";
motorista1.cnh = "123456789";

let mensagem = motorista1.dirigirCarro(car1);
console.log(mensagem);

car1.acelerar();
let teste = car1.obterVelocidade();
console.log(teste);

car1.frear();
teste = car1.obterVelocidade();
console.log(teste);

