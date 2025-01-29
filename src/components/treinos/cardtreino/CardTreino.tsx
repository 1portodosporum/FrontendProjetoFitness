import { Dumbbell } from 'lucide-react';
import FormTreino from '../formtreino/FormTreino';

function CardTreino() {
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
        <FormTreino />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Todos os campos são obrigatórios</p>
        </div>
      </div>
    </div>
  );
}

export default CardTreino;
