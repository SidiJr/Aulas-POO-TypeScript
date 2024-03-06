import { Agencia } from "./Agencia";

export class Conta {
    numero:number;
    saldo:number = 0;
    limite:number = 100;
    agencia:Agencia;

    constructor(agencia: Agencia){
        this.agencia = agencia;
    }

    deposita(valor: number): void {
        this.saldo += valor;
    }

    saca(valor: number): void{
        this.saldo -= valor;
    }

    imprimeExtrato(): void{
        console.log("SALDO: "+this.saldo);
    }

    consultaSaldoDisponivel(): number{
        return this.saldo + this.limite;
    }

    transfere(destino:Conta, valor:number){
        this.saldo -= valor;
        destino.saldo += valor;
    }
} 



