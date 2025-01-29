import { Link } from 'react-router';

function Cadastro() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-red-950 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Bem-vindo</h2>
            <p className="text-gray-600 mt-2">Faça seu cadastro para continuar</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium text-gray-700 block">
                Nome
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition-colors"
                  placeholder="Seu Nome"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="usuario" className="text-sm font-medium text-gray-700 block">
                Email
              </label>
              <div className="relative">
                <input
                  id="usuario"
                  name="usuario"
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="foto" className="text-sm font-medium text-gray-700 block">
                Link Foto
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition-colors"
                  placeholder="Link da sua melhor foto"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="senhar" className="text-sm font-medium text-gray-700 block">
                Senha
              </label>
              <div className="relative">
                <input
                  name="senha"
                  id="senha"
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-red-900 outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmarSenha" className="text-sm font-medium text-gray-700 block">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-red-900 focus:border-red-900 outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-950 font-medium transition-colors">
              Entrar
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-red-950 hover:text-red-900">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium">
              Faça Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
