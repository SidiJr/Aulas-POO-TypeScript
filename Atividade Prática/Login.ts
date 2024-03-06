export class Login{
    private _usuario:string;
    private _senha:string;

    constructor(usuario:string, senha:string){
        this._usuario = usuario;
        this._senha = senha;
    }

    isValid(login:Login):boolean{
        if(this._usuario === "usuario" && this._senha === "123456"){
            return true;
        }else{
            return false;
        }
    }
}