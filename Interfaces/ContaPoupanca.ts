import { Conta } from "./Conta";

export class ContaPoupanca implements Conta{
    private _saldo:number = 0;

    public deposita(valor: number): void {
        this._saldo += valor;
    }

    public saca(valor: number): void {
        this._saldo -= valor ;
    }

    public getSaldo(): number {
        return this._saldo;
    }
}
