import { BarChart, Clock, Dumbbell } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import TreinoServices from '../../../services/TreinoServices';
import Treino from '../../../models/Treino';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';

function FormTreino() {
  const navigate = useNavigate();
  const treinoServices = new TreinoServices();

  const [treino, setTreino] = useState<Treino>({} as Treino);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  const buscarTreinoPorId = async (id: string) => {
    try {
      await treinoServices.buscarTreinoPorId(id, setTreino, { headers: { Authorization: token } });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  };

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado para acessar essa página');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarTreinoPorId(id);
    }
  }, [id]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setTreino({
      ...treino,
      [e.target.name]: e.target.value,
    });
  };

  const retornar = () => {
    navigate('/listartreinos');
  };

  const cadastrarTreino = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await treinoServices.atualizarTreino(treino, setTreino, { headers: { Authorization: token } });
        alert('Treino atualizado com sucesso!');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        } else {
          alert('Erro ao atualizar treino');
        }
      }
    } else {
      try {
        await treinoServices.cadastrarTreino(treino, setTreino, { headers: { Authorization: token } });
        alert('Treino cadastrado com sucesso!');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        } else {
          alert('Erro ao cadastrar treino');
        }
      }
    }
    setIsLoading(false);
    retornar();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-950 to-red-950 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Dumbbell className="h-12 w-12 text-red-950" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Cadastro de Treino</h2>
          <p className="text-gray-600 mt-2">Configure o treino</p>
        </div>
        <form className="space-y-6" onSubmit={cadastrarTreino}>
          <div className="space-y-2">
            <label htmlFor="tipo" className="text-sm font-medium text-gray-700 block">
              Tipo de Treino
            </label>
            <div className="relative">
              <Dumbbell className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="tipo"
                name="tipo"
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
                placeholder="Digite o tipo de treino"
                value={treino.tipo}
                onChange={atualizarEstado}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="periodo" className="text-sm font-medium text-gray-700 block">
                Período (meses)
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="periodo"
                  name="periodo"
                  type="text"
                  min="2"
                  max="36"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
                  placeholder="Ex: 3 meses"
                  value={treino.periodo}
                  onChange={atualizarEstado}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="nivel" className="text-sm font-medium text-gray-700 block">
                Nível
              </label>
              <div className="relative">
                <BarChart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  id="nivel"
                  name="nivel"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-950 focus:border-red-950 outline-none transition-colors appearance-none bg-white"
                  value={treino.nivel}
                  onChange={(e) => setTreino({ ...treino, nivel: e.target.value })}
                  required>
                  <option value="">Selecione</option>
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-950 text-white py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-950 font-medium transition-colors">
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
            )}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Todos os campos são obrigatórios</p>
        </div>
      </div>
    </div>
  );
}

export default FormTreino;
