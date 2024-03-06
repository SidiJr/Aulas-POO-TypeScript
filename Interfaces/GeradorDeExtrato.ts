import { Conta } from "./Conta";

export class GeradorDeExtrato {
    public geraExtrato(c:Conta){
        console.log("EXTRATO") ;
        console.log("SALDO: " +c.getSaldo()) ;
    }
}