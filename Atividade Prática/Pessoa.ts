export abstract class Pessoa {
    private _id:number;
    private _nome:string;
    private _email:string;
    private _telefone:string;
    private _cpf:string;
    private _rg:string;
    private _dataNascimento:string;

    constructor(id: number, nome: string, email: string, telefone: string, cpf: string, rg: string,
    dataNascimento: string) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._cpf = cpf;
        this._rg = rg;
        this._dataNascimento = dataNascimento;
    }

    get Nome():string{
        return this._nome;
    }

    getIdade(){

    }
}

