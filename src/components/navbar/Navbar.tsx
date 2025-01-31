import { LogIn } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-white font-bold hover:underline"
      : "text-white hover:underline";
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md px-6 py-3 flex justify-between items-center z-50">
      <Link to="/">
        <span className="text-3xl font-bold text-red-950">
          GEN<span className="text-white">ƒ</span>IT
        </span>
      </Link>

      <div className="flex items-center space-x-8">
        <Link to="/listaralunos">
          <span className={getNavLinkClass("/listaralunos")}>Alunos</span>
        </Link>
        <Link to="/listartreinos">
          <span className={getNavLinkClass("/listartreinos")}>Treinos</span>
        </Link>
        <Link to="/formaluno">
          <span className={getNavLinkClass("/formaluno")}>Cadastrar Aluno</span>
        </Link>
        <Link to="/formtreino">
          <span className={getNavLinkClass("/formtreino")}>
            Cadastrar Treino
          </span>
        </Link>
      </div>

      <div>
        <Link to="/login">
          <button className="bg-red-950 hover:bg-red-900 text-white px-8 py-2.5 rounded-full text-base font-semibold flex items-center gap-2">
            <LogIn className="h-5 w-5" />
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
