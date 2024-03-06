import { Car } from "./car";

var estado;

let car1:Car = new Car();
car1.modelo = "Fusca";
car1.marca = "Volkswagen";
car1.cor = "Preto";
car1.anoFabricacao = "1963";
car1.anoModelo = "1963";
car1.ligar();

if(car1.ligado === true){
    estado = "ligado";
}else if(car1.ligado === false){
    estado = "desligado";
}

console.log("O carro "+car1.modelo+" está "+estado+".");

