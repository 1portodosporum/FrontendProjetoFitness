import Aluno from "./Alunos";

export default interface Treino {
    id: number;
    tipo: string;
    periodo: string;
    nivel: string;
    aluno?: Aluno;
}