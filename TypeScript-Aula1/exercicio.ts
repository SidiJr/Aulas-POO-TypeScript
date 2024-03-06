export class Car{
    marca:string;
    modelo:string;
    cor:string;
    placa:string;
    velocidade:number;

    acelerar():void{
        if(this.velocidade < 300){
            this.velocidade += 1
        }
    }

    frear():void{
        if(this.velocidade > 0){
            this.velocidade -= 1
        }
    }

    obterVelocidade():number{
        return this.velocidade
    }
}

export class Motorista{
    nome:string
    cnh:string

    dirigirCarro(modelo: Car):string{
        return this.nome+" está dirigindo o carro "+modelo.modelo
    }
}