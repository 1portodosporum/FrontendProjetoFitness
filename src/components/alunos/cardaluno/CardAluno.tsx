import { Dumbbell, Link, Pencil, Ruler, Trash2, Weight } from "lucide-react";
import Imc from "../../../models/Imc";
import AlunoServices from "../../../services/AlunoServices";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface CardAlunoProps {
  aluno: Imc;
}

export const CardAluno = ({ aluno }: CardAlunoProps) => {
  

  const navigator = useNavigate();
  const alunoServices = new AlunoServices();

   const { usuario } = useContext(AuthContext);
    const token = usuario.token;

  const removerAluno = async(id: string) => {
    try {
      await alunoServices.deletarAluno(id,{ headers: { Authorization: token }});
      alert('Aluno removido com sucesso!');
    } catch (error) {
      alert('Erro ao remover aluno!');
    }
  } 

  return (
    // <div className="h-screen flex justify-center items-center bg-gray-100">
    <div className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden p-5 flex flex-col items-center space-y-4 border border-gray-200">
      <img
        className="w-24 h-24 rounded-full border-4 border-red-950 object-cover"
        src={aluno.aluno.foto}
        alt="Aluno"
      />

      <div className="text-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{aluno.aluno.nome}</h2>

        <div className="flex items-center space-x-2 text-gray-600">
          <Weight className="w-4 h-4 text-red-950" />
          <p className="text-sm font-medium">
            Peso: <span className="font-semibold"> {aluno.aluno.peso}</span>
          </p>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <Ruler className="w-4 h-4 text-red-950" />
          <p className="text-sm font-medium">
            Altura: <span className="font-semibold">{aluno.aluno.altura}</span>
          </p>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <Dumbbell className="w-4 h-4 text-red-950" />
          <p className="text-sm font-medium">
            Treino: <span className="font-semibold">{aluno.aluno.treino?.tipo}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-4">
            <button onClick={() => navigator(`/formaluno/${aluno.aluno.id}`)}
             className="p-2 text-black hover:bg-blue-50 rounded-full transition-colors">
              <Pencil className="h-5 w-5" />
            </button>  
        <button
        onClick={() => removerAluno(aluno.aluno.id.toString())}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
          title="Excluir"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
      <button className="bg-red-950 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-900 transition duration-700">
          Ver Detalhes
      </button>
    </div>
    // </div>
  );
};

