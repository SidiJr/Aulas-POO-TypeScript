import { Funcionario } from "./Funcionario";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Consulta{
    private _id:number;
    private _dataConsulta:string;
    private _funcionario:Funcionario;
    private _medico:Medico;
    private _paciente:Paciente;
    private _status:Status;

    get NomePaciente(){
        return this._paciente.Nome;
    }

    get NomeMedico(){
        return this._medico.Nome;
    }

    get NomeFuncionario(){
        return this._funcionario.Nome;
    }

    get Status(){
        return this._status;
    }

    agendarConsulta(id:number, dataConsulta:string, funcionario:Funcionario, medico:Medico, paciente:Paciente):void{
        this._id = id;
        this._dataConsulta = dataConsulta;
        this._funcionario = funcionario;
        this._medico = medico;
        this._paciente = paciente;
        this._status = Status.Espera;
    }

    atenderConsulta():void{
        this._status = Status.Atendido;
    }

    excluirConsulta():void{
        this._status = Status.Cancelado;
    }
}

export enum Status {
    Espera = 0,
    Atendido = 1,
    Cancelado = 2,
}