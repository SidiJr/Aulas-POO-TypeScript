export class Conta{
    numero: number;
    limite: number;
    saldo: number;
    
    deposita(valor: number): void {
        this.saldo += valor;
    }

    saca(valor: number): void{
        this.saldo -= valor;
    }

    imprimeExtrato(): void{
        console.log("SALDO: "+this.saldo);
    }

}