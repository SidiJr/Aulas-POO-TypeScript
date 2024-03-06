import { Conta } from "./Conta";

export class ContaCorrente implements Conta{
    private _saldo:number = 0;
    private _taxaPorOperacao:number = 0.45;

    public deposita(valor: number): void {
        this._saldo += valor - this._taxaPorOperacao;
    }

    public saca(valor: number): void {
        this._saldo -= valor + this._taxaPorOperacao;
    }

    public getSaldo(): number {
        return this._saldo;
    }
}