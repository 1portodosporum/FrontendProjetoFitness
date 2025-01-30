import { Dumbbell, Ruler, Weight } from "lucide-react";
import Aluno from "../../../models/Alunos";
import Imc from "../../../models/Imc";

interface CardAlunoProps {
  aluno: Imc;
}

export const CardAluno = ({ aluno }: CardAlunoProps) => {
  return (
    // <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden p-5 flex flex-col items-center space-y-4 border border-gray-200">
        <img
          className="w-24 h-24 rounded-full border-4 border-red-950 object-cover"
          src={aluno.aluno.foto}
          alt="Aluno"
        />

        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">{ aluno.aluno.nome }</h2>

          <div className="flex items-center space-x-2 text-gray-600">
            <Weight className="w-4 h-4 text-red-950" />
            <p className="text-sm font-medium">
              Peso: <span className="font-semibold"> { aluno.aluno.peso }</span>
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-600">
            <Ruler className="w-4 h-4 text-red-950" />
            <p className="text-sm font-medium">
              Altura: <span className="font-semibold">{ aluno.aluno.altura  }</span>
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-600">
            <Dumbbell className="w-4 h-4 text-red-950" />
            <p className="text-sm font-medium">
              Treino: <span className="font-semibold">{ aluno.aluno.treino?.tipo}</span>
            </p>
          </div>
        </div>

        <button className="bg-red-950 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-900 transition duration-700">
          Ver Detalhes
        </button>
      </div>
    // </div>
  );
};

