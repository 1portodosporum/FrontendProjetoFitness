import Treino from "./Treino";
import Usuario from "./Usuario";

export default interface Aluno {
    id: number;
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    foto: string;
    sexo: string;
    treino?: Treino;
    usuario?: Usuario;
}