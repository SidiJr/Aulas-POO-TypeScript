enum Posicao {
    GOLEIRO,
    ZAGUEIRO,
    LATERAL,
    VOLANTE,
    MEIA,
    ATACANTE
}

class Jogador {
    public nome:string;
    public posicao:Posicao;
    public constructor(nome:string, posicao:Posicao) {
        this.nome = nome;
        this.posicao = posicao;
    }
}

let j1:Jogador = new Jogador("Dida", Posicao.GOLEIRO);
let j2:Jogador = new Jogador("Cafu", Posicao.LATERAL);
let j3:Jogador = new Jogador("Ronaldo", Posicao.ATACANTE);

class Funcionario {
    public nome:string;
    public dependentes:Array<string>;
    
    constructor(nome:string){
        this.nome = nome;
        this.dependentes = new Array<string>();
    }

    adicionaDependente(nome:string):void{
        this.dependentes.push(nome);
    }

    getDependentes():Array<string>{
        return this.dependentes;
    }
}

let f1:Funcionario = new Funcionario("Pedro");

f1.adicionaDependente("Gabriel");
f1.adicionaDependente("Maria");
f1.adicionaDependente("João");
f1.adicionaDependente("Roberta");
f1.adicionaDependente("Carlos");

console.log("Nome do funcionário: "+f1.nome);

f1.getDependentes().forEach(element => {
    console.log("Dependente: "+ element);
});