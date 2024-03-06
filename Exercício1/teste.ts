import { Fisica } from "./Fisica";
import { Juridica } from "./Juridica";

let fisica1:Fisica = new Fisica("Pedro","999999999", "pedro@gmail.com", "1111111", "2222222", "01/01/2000" );
let juridica1:Juridica = new Juridica("empresa1", "8888888", "emprasa1@gmail.com", "Google", "33333", fisica1);
let fisica2:Fisica = new Fisica("Arthur","999999999", "arthur@gmail.com", "1111111", "2222222", "01/01/2000" );

juridica1.alterarResponsavel(fisica2);
fisica1.enviarMensagem("Bom dia!");