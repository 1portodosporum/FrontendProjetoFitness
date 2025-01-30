import { LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Navbar() {

  const location = useLocation();

  if(location.pathname === "/login", "cadastro") return null;

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-end items-center">
      <div>
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
