export class Pessoa{
    private _nome:string;
    private _datanasc:string;
    private _pai:Pessoa;
    private _mae:Pessoa;

    constructor(nome:string, datanasc:string, pai:Pessoa, mae:Pessoa){
        this._nome = nome;
        this._datanasc = datanasc;
        this._pai = pai;
        this._mae = mae;
    }

    getNome():string{
        return this._nome;
    }

    getPai():Pessoa{
        return this._pai;
    }

    getMae():Pessoa{
        return this._mae;
    }

    setPai(pai:Pessoa){
        this._pai = pai;
    }

    setMae(mae:Pessoa){
        this._mae = mae;
    }

    isIrmao(p:Pessoa):boolean{
        if(this.getPai() === p.getPai() || this.getMae() === p.getMae()){
            return true;
        }
        return false;
    }

    isTio(p:Pessoa):boolean{
        if(this.isIrmao(p.getPai()) || this.isIrmao(p.getMae())){
            return true;
        }
        return false
    }

    isPrimo(p:Pessoa):boolean{
        if(this.getPai().isIrmao(p.getPai()) || this.getMae().isIrmao(p.getMae()) || this.getPai().isIrmao(p.getMae()) || this.getMae().isIrmao(p.getPai())){
            return true;
        }
        return false
    }

    getTipoParentesco(p:Pessoa):string{
        if(this.getPai() === p.getPai() || this.getMae() === p.getMae()){
            return "irmão(ã)";
        }
        if(this.isIrmao(p.getPai()) || this.isIrmao(p.getMae())){
            return "tio(a)";
        }
        if(this.getPai().isIrmao(p.getPai()) || this.getMae().isIrmao(p.getMae()) || this.getPai().isIrmao(p.getMae()) || this.getMae().isIrmao(p.getPai())){
            return "primo(a)";
        }
        return "sem parentesco";
    }
}