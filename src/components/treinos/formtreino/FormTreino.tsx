import { BarChart, Clock, Dumbbell } from 'lucide-react';

function FormTreino() {
  return (
    <form className="space-y-6">
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
              type="number"
              min="1"
              max="36"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-950 focus:border-red-950 outline-none transition-colors"
              placeholder="Ex: 3"
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
        Cadastrar Treino
      </button>
    </form>
  );
}

export default FormTreino;
