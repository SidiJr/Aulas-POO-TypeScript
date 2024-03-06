export class Car{
    modelo:string;
    marca:string;
    cor:string;
    anoFabricacao:string;
    anoModelo:string;
    ligado:boolean;

    ligar():void{
        this.ligado = true;
    }

    desligar():void{
        this.ligado = false;
    }


}
