import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';
import { Link } from 'react-router';

export default function Footer() {
  let data = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 ">
          <div className="space-y-6">
            <div className="text-3x1 font-bold text-white">
              <Link to="/">
                GEN<span className="text-red-900">ƒ</span>IT
              </Link>
            </div>

            <div className="flex justify-center gap-14">
              <div className="text-center">
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 duration-700 hover:text-red-900">
                      <Link to="/listaralunos">Sobre nós</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <ul>
                  <li>
                    <a href="#" className="text-gray-400 duration-700 hover:text-red-900">
                      <Link to="/listartreinos">Contato</Link>
                      <Link to="/formaluno">cadastrar aluno</Link>
                      <Link to="/formtreino">treino</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/1portodosporum"
                target="_blank"
                className="text-gray-500 duration-700 hover:text-red-900 duration-600">
                <FacebookLogo size={24} weight="fill" />
              </a>
              <a
                href="https://github.com/1portodosporum"
                target="_blank"
                className="text-gray-500 duration-700 hover:text-red-900 duration-600">
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a
                href="https://github.com/1portodosporum"
                target="_blank"
                className="text-gray-500 duration-700 hover:text-red-900 duration-600">
                <YoutubeLogo size={24} weight="fill" />
              </a>
              <a
                href="https://github.com/1portodosporum"
                target="_blank"
                className="text-gray-500 duration-700 hover:text-red-900">
                <LinkedinLogo size={24} weight="fill" />
              </a>
            </div>

            <p className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm ">
              {' '}
              &copy; {data} Todos os direitos reservados | 1PORTO <i className="bx bx-anchor"></i>{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
