import { LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Navbar() {
  // const location = useLocation();

  // if(location.pathname === "/login", "/cadastro") return null;

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <span className="text-3xl font-bold text-red-950">
            GEN<span className="text-white">ƒ</span>IT
          </span>
        </Link>
        <Link to="/listaralunos">
          <span className="text-white">Alunos</span>
        </Link>
        <Link to="/listartreinos">
          <span className="text-white">Treinos</span>
        </Link>
        <Link to="/formaluno">
          <span className="text-white">Cadastrar Aluno</span>
        </Link>
        <Link to="/formtreino">
          <span className="text-white">Cadastrar Treino</span>
        </Link>
        <button className="bg-red-950 duration-700 hover:bg-red-900 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center mx-auto">
          <Link to="/login">
            Login
            <LogIn className="ml-2 h-5 w-5" />
          </Link>
        </button>
      </div>
    </nav>
  );
}
