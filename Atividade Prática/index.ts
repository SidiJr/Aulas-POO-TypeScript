import { Cargo } from "./Cargo";
import { Consulta, Status } from "./Consulta";
import { Convenio } from "./Convenio";
import { Funcionario } from "./Funcionario";
import { Login } from "./Login";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

let cargo1 = new Cargo(1, "Atendente");
let login1= new Login("usuario", "123456");
let login2= new Login("usuario", "123456");
let convenio1 = new Convenio("Unimed");

let funcionario1 = new Funcionario(
    1,
    "Gustavo",
    "gustavo123@gmail.com",
    "999123456",
    "123.456.789-11",
    "123456789",
    "10/12/2000",
    cargo1,
    5000, 
    login1
);

let paciente1 = new Paciente(
    1,
    "Bruno",
    "bruno444@gmail.com",
    "999878787",
    "987.654.321-99",
    "223322332",
    "07/06/1999",
    "solteiro",
    "Banco do Brasil",
    convenio1
);

let medico1 = new Medico(
    1,
    "Samuel",
    "samuel@gmail.com",
    "999123123",
    "444.444.444-22",
    "987123456",
    "30/12/1995",
    "123333",
    login2
);

let consulta1 = new Consulta();

if(login1.isValid(login1) === true){
    consulta1.agendarConsulta(1, "20/11/2023",funcionario1, medico1, paciente1);
    console.log("Paciente: "+consulta1.NomePaciente+"\nMédico: "+consulta1.NomeMedico+"\nStatus: "+Status[consulta1.Status]+"\nAgendado por: "+consulta1.NomeFuncionario+"\n")
}else{
    console.log("Ocorreu um erro.")
}

if(login2.isValid(login2) === true){
    consulta1.atenderConsulta();
    console.log("Paciente: "+consulta1.NomePaciente+"\nMédico: "+consulta1.NomeMedico+"\nStatus: "+Status[consulta1.Status]+"\nAgendado por: "+consulta1.NomeFuncionario+"\n")
}else{
    console.log("Ocorreu um erro.")
}
