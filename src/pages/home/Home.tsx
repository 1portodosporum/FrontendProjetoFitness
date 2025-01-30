import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import './Home.css';

export default function Home() {
  return (
      <section className=" relative h-screen flex items-center justify-center"> 
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-7xl md:text-7xl font-bold mb-6">
            GEN<span className="text-red-900">ƒ</span>IT</h1>
          <p className="text-xl md:text-2xl mb-8">Transforme seu corpo, transforme sua vida</p>

          <button className="bg-red-950 duration-700 hover:bg-red-900 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center mx-auto">
            <Link to="cadastro">Cadastrar</Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>  
  );
}
