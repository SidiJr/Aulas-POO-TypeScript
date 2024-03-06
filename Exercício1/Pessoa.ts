export abstract class Pessoa{
    private _nome:string;
    private _telefone:string;
    private _email:string;

    constructor(nome: string, telefone: string, email: string) {
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
    }

    enviarMensagem(mensagem:string):void{
        console.log(mensagem);
    }

    set Nome(nome:string){
        this._nome = nome;
    }

    get Nome():string{
        return this._nome;
    }
}