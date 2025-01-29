import { User, Calendar, Ruler, Weight, Dumbbell } from 'lucide-react';

function FormAluno() {
  return (
    <form className="space-y-6">
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
            id="nivel"
            name="nivel"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950 outline-none transition-colors appearance-none bg-white"
            required>
            <option value="">Selecione</option>
            <option value="iniciante">Treino 1</option>
            <option value="intermediario">Treino 2</option>
            <option value="avancado">Treino 3</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-red-950 text-white py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-950 font-medium transition-colors">
        Cadastrar Aluno
      </button>
    </form>
  );
}

export default FormAluno;
