import { User, Calendar, Ruler, Weight, Dumbbell } from 'lucide-react';
import AlunoServices from '../../../services/AlunoServices';
import TreinoServices from '../../../services/TreinoServices';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import Treino from '../../../models/Treino';
import Aluno from '../../../models/Alunos';
import { AuthContext } from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

function FormAluno() {
  const alunoServices = new AlunoServices();
  const treinoServices = new TreinoServices();
  const navigate = useNavigate();

  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [aluno, setAluno] = useState<Aluno>({} as Aluno);

  const [treino, setTreino] = useState<Treino>({} as Treino);
  const [isLoading, setIsLoading] = useState(false);


  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const buscarAlunosPorId = async(id: string) => {
    try {
      await alunoServices.buscarAlunoPorId(id, setAluno, { headers: { Authorization: token } });
    }catch (error: any){
      if(error.toString().includes('403')){
        handleLogout();
      }
    }
  }

  const buscarTreinoPorId = async(id: string) => {
    try {
      await treinoServices.buscarTreinoPorId(id, setTreinos, { headers: { Authorization: token } });
    }catch (error: any){
      if(error.toString().includes('403')){
        handleLogout();
      }
    }
  }

  const buscarTreinos = async() => {
    try {
      await treinoServices.buscarTreinos(setTreinos, { headers: { Authorization: token } });
    }catch (error: any){
      if(error.toString().includes('403')){
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if(token === ''){
      alert('Você precisa estar logado para acessar essa página');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarTreinos();
    if(id !== undefined){
      buscarAlunosPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setAluno({
      ...aluno,
      treino: treino,
    });
  }, [treino]);

  const retornar = () => {
    navigate('/listaralunos');
  }

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setAluno({
      ...aluno,
      [e.target.name]: e.target.value,
      treino: treino,
      usuario: usuario,
    });
  }

  const cadastraNovoAluno = async(e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if(id !== undefined){
      try{
        await alunoServices.atualizarAluno(aluno, setAluno, 
          { headers: { Authorization: token }
          }
        );
        alert('Aluno atualizado com sucesso');
      } catch (error: any){
        if(error.toString().includes('403')){
          handleLogout();
        } else {
          alert('Erro ao atualizar o aluno');
        }
      }    
    } else {
      try{
        await alunoServices.cadastrarAluno(aluno, setAluno, 
          { headers: { Authorization: token }
          }
        );
        alert('Aluno cadastrado com sucesso');
      } catch (error: any){
        if(error.toString().includes('403')){
          handleLogout();
        } else {
          alert('Erro ao cadastrar o aluno');
        }
      }    
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <section className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <form className="space-y-6" onSubmit={cadastraNovoAluno}>
        <div className="space-y-2">
          <label htmlFor="nome" className="text-sm font-medium text-gray-700 block">
            Nome Completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="nome"
              name="nome"
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
              placeholder="Digite o nome completo"
              value={aluno.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="idade" className="text-sm font-medium text-gray-700 block">
            Idade
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="idade"
              name="idade"
              type="number"
              min="0"
              max="120"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
              placeholder="Digite a idade"
              value={aluno.idade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="altura" className="text-sm font-medium text-gray-700 block">
            Altura (m)
          </label>
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="altura"
              name="altura"
              type="number"
              step="0.01"
              min="0"
              max="3"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
              placeholder="Ex: 1.75"
              value={aluno.altura}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="peso" className="text-sm font-medium text-gray-700 block">
            Peso (kg)
          </label>
          <div className="relative">
            <Weight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="peso"
              name="peso"
              type="number"
              step="0.1"
              min="0"
              max="300"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
              placeholder="Ex: 70.5"
              value={aluno.peso}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="nivel" className="text-sm font-medium text-gray-700 block">
            Treino{' '}
          </label>
          <div className="relative">
            <Dumbbell className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              id="treino"
              name="treino"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950 outline-none transition-colors appearance-none bg-white"
              required
              onChange={(e) => buscarTreinoPorId(e.currentTarget.value)} 
            >
              <option value="">Selecione um Treino</option>
              {treinos.map((treino) => (
                <option value={treino.id}>
                  {treino.tipo}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-red-950 text-white py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-950 font-medium transition-colors"
          >
            {
              isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
          /> :
          <span>{id !== undefined ? 'Atualizar' : 'Cadastrar' }</span>
            }
        </button>
      </form>
    </section>
  );
}

export default FormAluno;
