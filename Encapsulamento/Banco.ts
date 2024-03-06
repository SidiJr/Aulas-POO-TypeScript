export class Banco{
    private numero:string;
    private saldo:number;
    private limite:number;

    constructor(saldo:number = 0, limite:number = 1000){
        this.saldo = saldo;
        this.limite = limite;
    }

    getNumero():string{
        return this.numero;
    }

    setNumero(novoNumero:string):void{
        this.numero = novoNumero;
    }

    getSaldo():number{
        return this.saldo;
    }

    setSaldo(novoSaldo:number):void{
        this.saldo = novoSaldo;
    }

    getLimite():number{
        return this.limite;
    }

    setLimite(novoLimite:number):void{
        this.limite = novoLimite;
    }
}
