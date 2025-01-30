import Aluno from "../models/Alunos";
import baseApi from "./baseApi";

class AlunoServices{

    buscarAlunos = async(setDados: Function, header: Object) => {
        const resposta = await baseApi.get("/alunos/imc", header);
        setDados(resposta.data);
    }

    buscarAlunoPorId = async(id: string, setDados: Function, header: Object) => {
        const resposta = await baseApi.get(`/alunos/${id}`, header);
        setDados(resposta.data);
    }

    cadastrarAluno = async(aluno: Aluno, setDados: Function , header: Object) => {
        const resposta = await baseApi.post("/alunos", aluno, header);
        setDados(resposta.data);
    }

    atualizarAluno = async(aluno: Aluno, setDados: Function, header: Object) => {
        const resposta = await baseApi.put("/alunos", aluno, header);
        setDados(resposta.data);
    }

    deletarAluno = async(id: string, header: Object) => {
        await baseApi.delete(`/alunos/${id}`, header);
    }

}

export default AlunoServices;