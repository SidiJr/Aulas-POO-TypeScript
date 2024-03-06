import { Cliente } from "./Cliente";

export class CartaoDeCredito{
    numero:number;
    dataDeValidade:string;
    cliente:Cliente;

    constructor(numero: number){
        this.numero = numero;
    }
}