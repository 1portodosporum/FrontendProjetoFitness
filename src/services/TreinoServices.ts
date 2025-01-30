import baseApi from "./baseApi";
import Treino from "../models/Treino";

class TreinoService{

    buscarTreinos = async(setDados: Function, header: Object) => {
        const resposta = await baseApi.get("/treinos", header);
        setDados(resposta.data);
    }

    buscarTreinoPorId = async(id: string, setDados: Function, header: Object) => {
        const resposta = await baseApi.get(`/treinos/${id}`, header);
        setDados(resposta.data);
    }

    cadastrarTreino = async(treino: Treino, setDados: Function , header: Object) => {
        const resposta = await baseApi.post("/treinos", treino, header);
        setDados(resposta.data);
    }

    atualizarTreino = async(treino: Treino, setDados: Function, header: Object) => {
        const resposta = await baseApi.put("/treinos", treino, header);
        setDados(resposta.data);
    }

    deletarTreino = async(id: string, header: Object) => {
        await baseApi.delete(`/treinos/${id}`, header);
    }

}

export default TreinoService;