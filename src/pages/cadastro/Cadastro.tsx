import { Link, useNavigate } from 'react-router';
import UsuarioServices from '../../services/UsuarioServices';
import { ChangeEvent, useState } from 'react';

function Cadastro() {

  const usuarioServices = new UsuarioServices();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const [usuario, setUsuario] = useState({
    nome: '',
    usuario: '',
    foto: '',
    senha: ''
  });

  // useEffect(() => {
  //     if (usuario.id !== 0) {
  //         retornar();
  //     }
  // }, [usuario]);

  const retornar = () => navigate('/login');

  const atualizarEstado = (evento: ChangeEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value
    });
  }

  const handleConfirmarSenha = (evento: ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(evento.target.value);
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await usuarioServices.cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
        retornar()
      } catch (error) {
        alert('Erro ao cadastrar usuário!',)
      }
    } else {
      alert('Senhas não conferem ou senha menor que 8 caracteres!')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-red-950 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Bem-vindo</h2>
            <p className="text-gray-600 mt-2">Faça seu cadastro para continuar</p>
          </div>

          <form className="space-y-6" onSubmit={cadastrar}>
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
                  value={usuario.nome}
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
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
                  value={usuario.usuario}
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
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
                  value={usuario.foto}
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
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
                  value={usuario.senha}
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => atualizarEstado(evento)}
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
                  value={confirmarSenha}
                  onChange={(evento: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(evento)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-950 font-medium transition-colors">
              Cadastrar
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
