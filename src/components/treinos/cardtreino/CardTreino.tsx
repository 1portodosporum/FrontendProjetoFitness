import { Dumbbell, Clock, Flame } from "lucide-react";

export const CardTreino = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center space-y-4 border-2 border-red-950 hover:border-red-950 transition">

        <div className="bg-purple-100 p-4 rounded-full">
          <Dumbbell className="w-12 h-12 text-red-950" />
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Treino de Força</h2>
          <p className="text-gray-600 text-sm">Foco no desenvolvimento muscular</p>

          <div className="flex justify-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="w-5 h-5 text-red-950" />
              <p className="text-sm font-medium">Duração: <span className="font-semibold">45 min</span></p>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-5 h-5 text-red-500" />
              <p className="text-sm font-medium">Intensidade: <span className="font-semibold">Alta</span></p>
            </div>
          </div>
        </div>

        <button className="bg-red-950 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-900 transition duration">
          Iniciar Treino
        </button>
      </div>
    </div>
  );
};

